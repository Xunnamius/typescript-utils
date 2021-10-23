'use strict';
// * Every now and then, we adopt best practices from CRA
// * https://tinyurl.com/yakv4ggx

const pkgName = require(`${process.cwd()}/package.json`).name;
const debug = require('debug')(`${pkgName}:babel-config`);

module.exports = {
  parserOpts: { strictMode: true },
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-transform-typescript',
    // ? Interoperable named CJS imports for free
    [
      'transform-default-named-imports',
      {
        exclude: [/^next([/?#].+)?/, /^mongodb([/?#].+)?/]
      }
    ]
  ],
  // ? Sub-keys under the "env" config key will augment the above
  // ? configuration depending on the value of NODE_ENV and friends. Default
  // ? is: development
  env: {
    // * Used by Jest and `npm test`
    test: {
      sourceMaps: 'both',
      presets: [
        ['@babel/preset-env', { targets: { node: true } }],
        ['@babel/preset-typescript', { allowDeclareFields: true }]
        // ? We don't care about minification
      ],
      plugins: [
        // ? Only active when testing, the plugin solves the following problem:
        // ? https://stackoverflow.com/q/40771520/1367414
        'explicit-exports-references'
      ]
    },
    // * Used by `npm run build`
    production: {
      presets: [
        // ? https://nodejs.org/en/about/releases
        ['@babel/preset-env', { targets: 'maintained node versions' }],
        ['@babel/preset-typescript', { allowDeclareFields: true }]
        // ? Minification is handled by Webpack
      ]
    },
    // * Used by `npm run build-externals`
    external: {
      presets: [
        ['@babel/preset-env', { targets: { node: true } }],
        ['@babel/preset-typescript', { allowDeclareFields: true }]
        // ? Minification is handled by Webpack
      ]
    }
  }
};

debug('exports: %O', module.exports);
