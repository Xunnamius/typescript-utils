<!-- prettier-ignore-start -->

<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![Maintenance status][badge-maintenance]][link-repo]
[![Last commit timestamp][badge-last-commit]][link-repo]
[![Open issues][badge-issues]][link-issues]
[![Pull requests][badge-pulls]][link-pulls]
[![Codecov][badge-codecov]][link-codecov]
[![Source license][badge-license]][link-license]
[![Tree shaking support][badge-tree-shaking]][link-bundlephobia]
[![Compressed package size][badge-size]][link-bundlephobia]
[![NPM version][badge-npm]][link-npm]
[![Uses Semantic Release!][badge-semantic-release]][link-semantic-release]

<!-- badges-end -->

<!-- prettier-ignore-end -->

# @xunnamius/all-types

This package is an amalgum of the following packages:

[@xunnamius/types][1]\
[@xunnamius/next-types][2]\
[@xunnamius/jest-types][3]

## Install

```bash
npm install --save-dev @xunnamius/all-types
```

## Usage

You can use this library's types in your TypeScript projects like so:

```TypeScript
import type { HttpStatusCode } from '@xunnamius/all-types'

const status: HttpStatusCode = 404;
```

## Documentation

See [each sub-package listed above][4] for information on the types this package
makes available. Further documentation can be found under [`docs/`][docs].

### License

[![FOSSA analysis][badge-fossa]][link-fossa]

## Contributing and Support

**[New issues][choose-new-issue] and [pull requests][pr-compare] are always
welcome and greatly appreciated! 🤩** Just as well, you can [star 🌟 this
project][link-repo] to let me know you found it useful! ✊🏿 Thank you!

See [CONTRIBUTING.md][contributing] and [SUPPORT.md][support] for more
information.

[badge-blm]: https://api.ergodark.com/badges/blm 'Join the movement!'
[link-blm]: https://secure.actblue.com/donate/ms_blm_homepage_2019
[badge-maintenance]:
  https://img.shields.io/maintenance/active/2021
  'Is this package maintained?'
[link-repo]: https://github.com/xunnamius/typescript-utils
[badge-last-commit]:
  https://img.shields.io/github/last-commit/xunnamius/typescript-utils
  'Latest commit timestamp'
[badge-issues]:
  https://img.shields.io/github/issues/Xunnamius/typescript-utils
  'Open issues'
[link-issues]: https://github.com/Xunnamius/typescript-utils/issues?q=
[badge-pulls]:
  https://img.shields.io/github/issues-pr/xunnamius/typescript-utils
  'Open pull requests'
[link-pulls]: https://github.com/xunnamius/typescript-utils/pulls
[badge-codecov]:
  https://codecov.io/gh/Xunnamius/typescript-utils/branch/main/graph/badge.svg?token=HWRIOBAAPW
  'Is this package well-tested?'
[link-codecov]: https://codecov.io/gh/Xunnamius/typescript-utils
[badge-license]:
  https://img.shields.io/npm/l/@xunnamius/all-types
  "This package's source license"
[link-license]: https://github.com/Xunnamius/typescript-utils/blob/main/LICENSE
[badge-fossa]:
  https://app.fossa.com/api/projects/custom%2B27276%2Fgit%40github.com%3AXunnamius%2Ftypescript-utils.git.svg?type=large
  "Analysis of this package's license obligations"
[link-fossa]:
  https://app.fossa.com/projects/custom+27276%2Fgit@github.com:Xunnamius%2Ftypescript-utils.git
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/all-types
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/all-types
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[badge-size]: https://badgen.net/bundlephobia/minzip/@xunnamius/all-types
[badge-tree-shaking]:
  https://badgen.net/bundlephobia/tree-shaking/@xunnamius/all-types
  'Is this package optimized for Webpack?'
[link-bundlephobia]:
  https://bundlephobia.com/result?p=@xunnamius/all-types
  'Package size (minified and gzipped)'
[package-json]: package.json
[docs]: docs
[choose-new-issue]:
  https://github.com/xunnamius/typescript-utils/issues/new/choose
[pr-compare]: https://github.com/xunnamius/typescript-utils/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
[1]: https://www.npmjs.com/package/@xunnamius/types
[2]: https://www.npmjs.com/package/@xunnamius/next-types
[3]: https://www.npmjs.com/package/@xunnamius/jest-types
[4]: #xunnamiusall-types