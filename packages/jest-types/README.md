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

# @xunnamius/jest-types

- [Install][1]
- [Usage][2]
- [Type and Constant Glossary][3]
- [Function Glossary][4]
  - [asMockedFunction][8]
  - [asMockedClass][9]
- [Documentation][5]
- [Contributing and Support][6]

---

This package contains several TypeScript utility types and helper functions for
use with [Jest][7]-based projects.

## Install

```bash
npm install --save-dev @xunnamius/jest-types
```

## Usage

You can use this library's exports in your TypeScript projects like so:

```TypeScript
import type { X } from '@xunnamius/jest-types'

const x: X = 'y';
```

## Type and Constant Glossary

This package exports the following: (none yet)

## Function Glossary

The following functions are available:

- [asMockedFunction][8]
- [asMockedClass][9]

### asMockedFunction

> See [the docs][10] for interface description.

This function returns `fn` or a function type `T` wrapped with Jest mock type
definitions via `jest.MockedFunction`.

```typescript
import execa from 'execa';
import debugFactory from 'debug';

import type { Debugger } from 'debug';
import type { ExecaChildProcess } from 'execa';

jest.mock('execa');
jest.mock('debug');

const mockedExeca = asMockedFunction(execa);
const mockedDebug = asMockedFunction<Debugger>();

// ...

beforeEach(() => {
  mockedDebug.extend =
    asMockedFunction<Debugger['extend']>().mockReturnValue(mockedDebug);

  asMockedFunction(debugFactory).mockReturnValue(mockedDebug);

  mockedExeca.mockImplementation(
    () =>
      Promise.resolve({
        /* ... */
      }) as ExecaChildProcess<Buffer>
  );
});

// ...

it('throws and outputs to CLI when doing a thing that fails', async () => {
  expect.hasAssertions();

  doThingThatFails(); // <== calls execa internally

  expect(mockedDebug).toBeCalledWith(expect.stringContaining('failed!'));
});
```

### asMockedClass

> See [the docs][11] for interface description.

This function returns returns `classConstructor` or a constructor type `T`
wrapped with Jest mock type definitions via `jest.MockedClass`.

```typescript
import { Db, MongoClient } from 'mongodb';

jest.mock('mongodb');

const mockMongoClient = asMockedClass(MongoClient);

beforeEach(() => {
  mockMongoClient.connect = jest.fn((url: string) =>
    Promise.resolve(
      new (class {
        // ...
      })() as unknown as MongoClient
    )
  );
});

it("creates client only if it doesn't already exist", async () => {
  expect.hasAssertions();

  getMemoizedClientConnection();
  getMemoizedClientConnection();
  getMemoizedClientConnection();

  expect(mockMongoClient.connect).toHaveBeenCalledTimes(1);
});
```

## Documentation

Further documentation can be found under [`docs/`][docs].

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
  https://img.shields.io/maintenance/active/2022
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
  https://img.shields.io/npm/l/@xunnamius/jest-types
  "This package's source license"
[link-license]: https://github.com/Xunnamius/typescript-utils/blob/main/LICENSE
[badge-fossa]:
  https://app.fossa.com/api/projects/custom%2B27276%2Fgit%40github.com%3AXunnamius%2Ftypescript-utils.git.svg?type=large
  "Analysis of this package's license obligations"
[link-fossa]:
  https://app.fossa.com/projects/custom+27276%2Fgit@github.com:Xunnamius%2Ftypescript-utils.git
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/jest-types
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/jest-types
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[badge-size]: https://badgen.net/bundlephobia/minzip/@xunnamius/jest-types
[badge-tree-shaking]:
  https://badgen.net/bundlephobia/tree-shaking/@xunnamius/jest-types
  'Is this package optimized for Webpack?'
[link-bundlephobia]:
  https://bundlephobia.com/result?p=@xunnamius/jest-types
  'Package size (minified and gzipped)'
[docs]: docs
[choose-new-issue]:
  https://github.com/xunnamius/typescript-utils/issues/new/choose
[pr-compare]: https://github.com/xunnamius/typescript-utils/compare
[contributing]: /CONTRIBUTING.md
[support]: /.github/SUPPORT.md
[1]: #install
[2]: #usage
[3]: #type-and-constant-glossary
[4]: #function-glossary
[5]: #documentation
[6]: #contributing-and-support
[7]: https://jestjs.io/
[8]: #asmockedfunction
[9]: #asmockedclass
[10]: ./docs/README.md#asmockedfunction
[11]: ./docs/README.md#asmockedclass
