'use strict';

const { readdirSync } = require('fs');

const pkgName = require('./package.json').name;
const debug = require('debug')(`${pkgName}:conventional-config`);
// TODO: break off this code into separate monorepo tooling (along with other)
const pathParts = process.cwd().replace(`${__dirname}/`, '').split('/');

debug('pathParts: %O', pathParts);

if (pathParts.length < 2 || pathParts[0] != 'packages') {
  throw new Error(`assert failed: illegal cwd: ${process.cwd()}`);
}

const pkgBasename = pathParts[1];
debug('pkgBasename: %O', pkgBasename);

const getExcludedDirs = (source, except) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name != except)
    .map((dirent) => `:(exclude)${source}/${dirent.name}`);

module.exports = require('@xunnamius/conventional-changelog-projector')({
  options: {
    // * Projector's monorepo tools follow basic lerna conventions
    lernaPackage: pkgBasename
  },
  gitRawCommitsOpts: {
    // ? Used to ignore changes in other packages
    // ? See: https://github.com/sindresorhus/dargs#usage
    '--': getExcludedDirs('..', pkgBasename)
  }
});
