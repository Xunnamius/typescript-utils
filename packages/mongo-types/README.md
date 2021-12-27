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

# @xunnamius/mongo-types

- [Install][1]
- [Usage][2]
- [Type and Constant Glossary][3]
  - [NULL_BEARER_TOKEN][7]
  - [MACHINE_BEARER_TOKEN][8]
  - [DUMMY_BEARER_TOKEN][9]
  - [BANNED_BEARER_TOKEN][10]
  - [DEV_BEARER_TOKEN][11]
  - [InternalAuthEntry][12]
  - [InternalAuthBearerEntry][13]
  - [InternalRequestLogEntry][14]
  - [InternalLimitedLogEntry][15]
- [Function Glossary][4]
- [Documentation][5]
- [Contributing and Support][6]

---

This package contains several TypeScript utility types and helper functions for
use with [MongoDB][16]-based projects.

## Install

```bash
npm install --save-dev @xunnamius/mongo-types
```

## Usage

You can use this library's exports in your TypeScript projects like so:

```TypeScript
import type { DUMMY_BEARER_TOKEN } from '@xunnamius/mongo-types';

// ...

await specialAuthentication({ token: { bearer: DUMMY_BEARER_TOKEN } });
```

## Type and Constant Glossary

This package exports the following:

- [NULL_BEARER_TOKEN][7]
- [MACHINE_BEARER_TOKEN][8]
- [DUMMY_BEARER_TOKEN][9]
- [BANNED_BEARER_TOKEN][10]
- [DEV_BEARER_TOKEN][11]
- [InternalAuthEntry][12]
- [InternalAuthBearerEntry][13]
- [InternalRequestLogEntry][14]
- [InternalLimitedLogEntry][15]

### NULL_BEARER_TOKEN

This string represents a token that is guaranteed never to appear in dummy data
generated during tests. In production, this string can be used to represent a
`null` or non-existent token. This string cannot be used for authenticated HTTP
access to the API.

```typescript
import type { NULL_BEARER_TOKEN } from '@xunnamius/mongo-types';

if (doAuth({ bearerToken: NULL_BEARER_TOKEN })) {
  // ...
} else {
  // ...
}
```

### MACHINE_BEARER_TOKEN

This string represents a token that is used by database initialization and
activity simulation scripts. This string cannot be used for authenticated HTTP
access to the API.

```typescript
import type { MACHINE_BEARER_TOKEN } from '@xunnamius/mongo-types';

if (doAuth({ bearerToken: MACHINE_BEARER_TOKEN })) {
  // ...
} else {
  // ...
}
```

### DUMMY_BEARER_TOKEN

This string represents a token that allows authenticated API access only when
running in a test environment (i.e. `NODE_ENV=test`). This string cannot be used
for authenticated HTTP access to the API in production.

```typescript
import type { DUMMY_BEARER_TOKEN } from '@xunnamius/mongo-types';

if (doAuth({ bearerToken: DUMMY_BEARER_TOKEN })) {
  // ...
} else {
  // ...
}
```

### BANNED_BEARER_TOKEN

This string represents a token that is guaranteed to be rate limited when
running in a test environment (i.e. `NODE_ENV=test`). This string cannot be used
for authenticated HTTP access to the API in production.

```typescript
import type { BANNED_BEARER_TOKEN } from '@xunnamius/mongo-types';

if (doAuth({ bearerToken: BANNED_BEARER_TOKEN })) {
  // ...
} else {
  // ...
}
```

### DEV_BEARER_TOKEN

This string represents a token that can be used to authenticate with local and
non-production deployments. This string cannot be used for authenticated HTTP
access to the API in production.

```typescript
import type { DEV_BEARER_TOKEN } from '@xunnamius/mongo-types';

if (doAuth({ bearerToken: DEV_BEARER_TOKEN })) {
  // ...
} else {
  // ...
}
```

### InternalAuthEntry

This type represents a basic credentials entry in the well-known "auth"
collection. **More complex credential types must extend from this base type.**

```typescript
import type { InternalAuthEntry } from '@xunnamius/mongo-types';

export async function isAuthOk({ token }: { token: Record<string, unknown> }) {
  return (await getDb({ name: 'system' }))
    .collection<InternalAuthEntry>('auth')
    .findOne({ token })
    .then((r) => !!r);
}
```

### InternalAuthBearerEntry

This type represents a bearer token entry in the well-known "auth" collection.

```typescript
import type { InternalAuthEntry } from '@xunnamius/mongo-types';

export async function isAuthOk({ token }: { token: { bearer: string } }) {
  return (await getDb({ name: 'system' }))
    .collection<InternalAuthBearerEntry>('auth')
    .findOne({ token })
    .then((r) => !!r);
}
```

### InternalRequestLogEntry

This type represents an entry in the well-known "request log" collection.

```typescript
import type { InternalRequestLogEntry } from '@xunnamius/mongo-types';

export async function insertLog({ req }: { req: NextApiRequest }) {
  await (await getDb({ name: 'system' }))
    .collection<InternalRequestLogEntry>('request-log')
    .insertOne({
      ip: getClientIp(req),
      token,
      method: req.method || null,
      route: req.url || null,
      resStatusCode: res.statusCode as HttpStatusCode,
      time: Date.now()
    });
}
```

### InternalLimitedLogEntry

This type represents an entry in the well-known "limited log" collection.

```typescript
import type { InternalLimitedLogEntry } from '@xunnamius/mongo-types';

export async function isRateLimited(ip: string | null, token: string | null) {
  return !!(await (
    await getDb({ name: 'system' })
  )
    .collection<InternalLimitedLogEntry>('limited-log-mview')
    .find({
      $or: [...(ip ? [{ ip }] : []), ...(token ? [{ token }] : [])],
      until: { $gt: Date.now() } // ? Skip the recently unbanned
    })
    .sort({ until: -1 })
    .limit(1)
    .next());
}
```

## Function Glossary

The following functions are available: (none yet)

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
  https://img.shields.io/npm/l/@xunnamius/mongo-types
  "This package's source license"
[link-license]: https://github.com/Xunnamius/typescript-utils/blob/main/LICENSE
[badge-fossa]:
  https://app.fossa.com/api/projects/custom%2B27276%2Fgit%40github.com%3AXunnamius%2Ftypescript-utils.git.svg?type=large
  "Analysis of this package's license obligations"
[link-fossa]:
  https://app.fossa.com/projects/custom+27276%2Fgit@github.com:Xunnamius%2Ftypescript-utils.git
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/mongo-types
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/@xunnamius/mongo-types
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[badge-size]: https://badgen.net/bundlephobia/minzip/@xunnamius/mongo-types
[badge-tree-shaking]:
  https://badgen.net/bundlephobia/tree-shaking/@xunnamius/mongo-types
  'Is this package optimized for Webpack?'
[link-bundlephobia]:
  https://bundlephobia.com/result?p=@xunnamius/mongo-types
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
[7]: #null_bearer_token
[8]: #machine_bearer_token
[9]: #dummy_bearer_token
[10]: #banned_bearer_token
[11]: #dev_bearer_token
[12]: #internalauthentry
[13]: #internalauthbearerentry
[14]: #internalrequestlogentry
[15]: #internallimitedlogentry
[16]: https://www.npmjs.com/package/mongodb
