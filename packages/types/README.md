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

# @xunnamius/types

- [Install][1]
- [Usage][2]
- [Type Glossary][3]
  - [JsonRegExp][4]
  - [JsonSuccess][5]
  - [JsonError][6]
  - [HttpStatusCode][7]
  - [AnyKey][8]
  - [AnyFunction][9]
  - [AnyClass][10]
- [Function Glossary][11]
  - [NoInfer][12]
- [Documentation][13]
- [Contributing and Support][14]

---

This package contains several generic TypeScript utility types and helper
functions not already covered by [type-fest][15].

## Install

```bash
npm install --save-dev @xunnamius/types
```

## Usage

You can use this library's types in your TypeScript projects like so:

```TypeScript
import type { HttpStatusCode } from '@xunnamius/types'

const status: HttpStatusCode = 404;
```

## Type Glossary

The following types are available:

- [JsonRegExp][4]
- [JsonSuccess][5]
- [JsonError][6]
- [HttpStatusCode][7]
- [AnyKey][8]
- [AnyFunction][9]
- [AnyClass][10]

### JsonRegExp

`JSON.parse()` by default cannot serialize and deserialize regular expressions.
With ES6, regular expressions can be represented by their `source` and `flags`
properties.

This type represents a serialized regular expression with respect to those
properties.

```typescript
import type { JsonRegExp } from '@xunnamius/types';

const target = /my-regex/i;
const jsonResult = JSON.parse(
  JSON.stringify({ source: target.source, flags: target.flags })
);
const deserializedTarget = RegExp(jsonResult.source, jsonResult.flags);

// Conceptually, target == deserializedTarget at this point in that they match
// the exact same strings (but are not literally or syntactically equal)
```

### JsonSuccess

This type represents a generic success result. Useful mostly in HTTP-related
code.

```typescript
import type { JsonSuccess } from '@xunnamius/types';

const jsonResult: JsonSuccess = { data: {}, success: true };
```

### JsonError

This type represents a generic error result. Useful mostly in HTTP-related code.

```typescript
import type { JsonError } from '@xunnamius/types';

const jsonResult: JsonError = {
  'some-more-data': {},
  message: 'error reason',
  success: false
};
```

### HttpStatusCode

This type represents any valid (and a few invalid) [HTTP status codes][16].

```typescript
import fetch from 'isomorphic-unfetch';
import type { HttpStatusCode } from '@xunnamius/types';

const res = await fetch('https://google.com');
const status: HttpStatusCode = res.status;
```

### AnyKey

This type represents any object key/index type.

```typescript
import type { AnyKey } from '@xunnamius/types';

const o: { [key: AnyKey]: unknown } = {
  key: 'valid',
  0: 'valid',
  [Symbol('key')]: 'valid'
};
```

### AnyFunction

This type represents any function type.

```typescript
import type { AnyFunction } from '@xunnamius/types';

const fn: AnyFunction = () => 'valid';
```

### AnyClass

This type represents any class.

```typescript
import type { AnyClass } from '@xunnamius/types';

const class1: AnyClass = class {
  constructor() {
    this.name = 'my class';
  }
};
```

## Function Glossary

The following functions are available:

- [NoInfer][12]

### NoInfer

This function prevents the compiler from automatically inferring a generic
parameter's type by [taking advantage of conditional types that depend on an
unresolved generic type parameter][17], ensuring the compiler cannot choose an
inference candidate and is forced to return the parameter's default value
instead.

Useful when using a generic parameter(s) to enforce typechecking, which is when
you want to throw an error instead of allowing the compiler to choose a
candidate based on usage (the default behavior).

```typescript
import type { NoInfer } from '@xunnamius/types';

function sendResult<T = never>(send: any, result: NoInfer<T>) {
  send(result);
}

type Num = { x: number };
sendResult<Num>(sendResponse, { x: 1 }); // okay

sendResult<Num>(sendResponse, { x: 'sss' }); // error
sendResult(sendResponse, { x: 1 }); // error
```

See also:

- [https://github.com/Microsoft/TypeScript/issues/14829][18]
- [https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics][19]
- [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults][20]

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
  https://img.shields.io/npm/l/@xunnamius/types
  "This package's source license"
[link-license]: https://github.com/Xunnamius/typescript-utils/blob/main/LICENSE
[badge-fossa]:
  https://app.fossa.com/api/projects/custom%2B27276%2Fgit%40github.com%3AXunnamius%2Ftypescript-utils.git.svg?type=large
  "Analysis of this package's license obligations"
[link-fossa]:
  https://app.fossa.com/projects/custom+27276%2Fgit@github.com:Xunnamius%2Ftypescript-utils.git
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/types
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/types
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[badge-size]: https://badgen.net/bundlephobia/minzip/@xunnamius/types
[badge-tree-shaking]:
  https://badgen.net/bundlephobia/tree-shaking/@xunnamius/types
  'Is this package optimized for Webpack?'
[link-bundlephobia]:
  https://bundlephobia.com/result?p=@xunnamius/types
  'Package size (minified and gzipped)'
[package-json]: package.json
[docs]: docs
[choose-new-issue]:
  https://github.com/xunnamius/typescript-utils/issues/new/choose
[pr-compare]: https://github.com/xunnamius/typescript-utils/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
[1]: #install
[2]: #usage
[3]: #type-glossary
[4]: #jsonregexp
[5]: #jsonsuccess
[6]: #jsonerror
[7]: #httpstatuscode
[8]: #anykey
[9]: #anyfunction
[10]: #anyclass
[11]: #function-glossary
[12]: #noinfer
[13]: #documentation
[14]: #contributing-and-support
[15]: https://github.com/sindresorhus/type-fest
[16]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[17]:
  https://stackoverflow.com/questions/56687668/a-way-to-disable-type-argument-inference-in-generics
[18]: https://github.com/Microsoft/TypeScript/issues/14829
[19]:
  https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics
[20]:
  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults
