<!-- prettier-ignore-start -->

<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![Last commit timestamp][badge-last-commit]][link-repo]
[![Open issues][badge-issues]][link-issues]
[![Pull requests][badge-pulls]][link-pulls]
[![Uses Semantic Release!][badge-semantic-release]][link-semantic-release]

<!-- badges-end -->

<!-- prettier-ignore-end -->

# typescript-utils

This monorepo contains generic utility types and helper functions for use in a
variety of TypeScript projects.

Before coming to this package to create new types, ensure your use case is not
covered by [type-fest][1], [Next.js itself][2], [MongoDB's Node.js driver][12],
or [TypeScript itself][3].

## Install

[@xunnamius/types][6]: for general TypeScript utilities:

```bash
npm install --save-dev @xunnamius/types
```

[@xunnamius/next-types][7]: for [next][4]-specific TypeScript utilities:

```bash
npm install --save-dev @xunnamius/next-types
```

[@xunnamius/jest-types][8]: for [jest][9]-specific TypeScript utilities:

```bash
npm install --save-dev @xunnamius/jest-types
```

## Usage

You can use this library's exports in your TypeScript projects like so:

```TypeScript
import type { HttpStatusCode } from '@xunnamius/types'

const status: HttpStatusCode = 404;
```

## Documentation

See [each package][5] for information on the types they make available and
further documentation.

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
[badge-fossa]:
  https://app.fossa.com/api/projects/custom%2B27276%2Fgit%40github.com%3AXunnamius%2Ftypescript-utils.git.svg?type=large
  "Analysis of this package's license obligations"
[link-fossa]:
  https://app.fossa.com/projects/custom+27276%2Fgit@github.com:Xunnamius%2Ftypescript-utils.git
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[choose-new-issue]:
  https://github.com/xunnamius/typescript-utils/issues/new/choose
[pr-compare]: https://github.com/xunnamius/typescript-utils/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
[1]: https://github.com/sindresorhus/type-fest
[2]: https://nextjs.org/docs/basic-features/typescript
[3]: https://github.com/sindresorhus/type-fest#built-in-types
[4]: https://github.com/vercel/next.js
[5]: /packages
[6]: packages/types
[7]: packages/next-types
[8]: packages/jest-types
[9]: https://www.npmjs.com/package/jest
[12]: https://docs.mongodb.com/drivers/node/current/fundamentals/typescript/
