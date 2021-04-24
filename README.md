<!-- prettier-ignore-start -->

<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![Maintenance status][badge-maintenance]][link-repo]
[![Last commit timestamp][badge-last-commit]][link-repo]
[![Open issues][badge-issues]][link-issues]
[![Pull requests][badge-pulls]][link-pulls]
[![codecov][badge-codecov]][link-codecov]
[![Source license][badge-license]][link-license]
[![NPM version][badge-npm]][link-npm]
[![semantic-release][badge-semantic-release]][link-semantic-release]

<!-- badges-end -->

<!-- prettier-ignore-end -->

# @xunnamius/types

- [Install](#install)
- [Usage](#usage)
- [Type Glossary](#type-glossary)
  - [JsonRegExp](#jsonregexp)
  - [JsonSuccess](#jsonsuccess)
  - [JsonError](#jsonerror)
  - [HttpStatusCode](#httpstatuscode)
- [Function Glossary](#function-glossary)
- [Documentation](#documentation)
- [Contributing and Support](#contributing-and-support)

---

This monorepo contains generic utility types and helper functions for use in a
variety of TypeScript projects.

Before coming to this package to create new types, ensure your use case is not
covered by [type-fest](https://github.com/sindresorhus/type-fest) (on which this
monorepo is based),
[Next.js itself](https://nextjs.org/docs/basic-features/typescript), or
[TypeScript itself](https://github.com/sindresorhus/type-fest#built-in-types).

## Install

For general TypeScript utilities:

```bash
npm install --save-dev type-fest @xunnamius/types
```

For general _and_ [next](https://github.com/vercel/next.js)-specific TypeScript
utilities:

```bash
# This command installs @xunnamius/types automatically
npm install --save-dev type-fest @xunnamius/next-types
```

For general _and_ [jest](https://github.com/vercel/next.js)-specific TypeScript
utilities:

```bash
# This command installs @xunnamius/types automatically
npm install --save-dev type-fest @xunnamius/jest-types
```

## Usage

You can use this library's types in your TypeScript projects like so:

```TypeScript
import type { HttpStatusCode } from '@xunnamius/types'

const status: HttpStatusCode = 404;
```

## Type Glossary

The following types are available:

**`@xunnamius/types`**

- [JsonRegExp](#jsonregexp)
- [JsonSuccess](#jsonsuccess)
- [JsonError](#jsonerror)
- [HttpStatusCode](#httpstatuscode)

**`@xunnamius/next-types`**

(todo)

**`@xunnamius/jest-types`**

(todo)

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

This type represents any valid (and a few invalid)
[HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

```typescript
import fetch from 'isomorphic-unfetch';
import type { HttpStatusCode } from '@xunnamius/types';

const res = await fetch('https://google.com');
const status: HttpStatusCode = res.status;
```

## Function Glossary

The following functions are available:

**`@xunnamius/jest-types`**

(todo)

## Documentation

Further documentation can be found under [`docs/`][docs].

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
  'When was the last commit to the official repo?'
[badge-issues]:
  https://isitmaintained.com/badge/open/xunnamius/typescript-utils.svg
  'Number of known issues with this package'
[link-issues]: https://github.com/xunnamius/typescript-utils/issues?q=
[badge-pulls]:
  https://img.shields.io/github/issues-pr/xunnamius/typescript-utils
  'Number of open pull requests'
[link-pulls]: https://github.com/xunnamius/typescript-utils/pulls
[badge-codecov]:
  https://codecov.io/gh/xunnamius/typescript-utils/branch/main/graph/badge.svg?token=HWRIOBAAPW
  'Is this package well-tested?'
[link-codecov]: https://codecov.io/gh/xunnamius/typescript-utils
[package-json]: package.json
[badge-license]:
  https://img.shields.io/npm/l/@xunnamius/types
  "This package's source license"
[link-license]: https://github.com/xunnamius/typescript-utils/blob/main/LICENSE
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/types
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/types
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[choose-new-issue]:
  https://github.com/xunnamius/typescript-utils/issues/new/choose
[pr-compare]: https://github.com/xunnamius/typescript-utils/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
[docs]: docs
