## Table of contents

### Interfaces

- [InternalAuthBearerEntry][1]
- [UnixEpochMs][2]

### Type aliases

- [HttpStatusCode][3]
- [InternalAuthEntry][4]
- [InternalLimitedLogEntry][5]
- [InternalRequestLogEntry][6]

### Variables

- [BANNED_BEARER_TOKEN][7]
- [DEV_BEARER_TOKEN][8]
- [DUMMY_BEARER_TOKEN][9]
- [MACHINE_BEARER_TOKEN][10]
- [NULL_BEARER_TOKEN][11]

## Type aliases

### HttpStatusCode

Ƭ **HttpStatusCode**: `100` | `101` | `102` | `200` | `201` | `202` | `203` |
`204` | `205` | `206` | `207` | `208` | `226` | `300` | `301` | `302` | `303` |
`304` | `305` | `306` | `307` | `308` | `400` | `401` | `402` | `403` | `404` |
`405` | `406` | `407` | `408` | `409` | `410` | `411` | `412` | `413` | `414` |
`415` | `416` | `417` | `418` | `419` | `420` | `420` | `422` | `423` | `424` |
`424` | `425` | `426` | `428` | `429` | `431` | `444` | `449` | `450` | `451` |
`451` | `494` | `495` | `496` | `497` | `499` | `500` | `501` | `502` | `503` |
`504` | `505` | `506` | `507` | `508` | `509` | `510` | `511` | `555` | `598` |
`599`

All valid HTTP status codes and several bespoke ones, including the non-existent
HTTP status code 555.

#### Defined in

packages/types/dist/types/packages/types/src/index.d.ts:49

---

### InternalAuthEntry

Ƭ **InternalAuthEntry**: `Object`

The shape of a basic credentials entry in the well-known "auth" collection.
**More complex credential types must extend from this base type.**

#### Type declaration

| Name         | Type                          |
| :----------- | :---------------------------- |
| `owner`      | `Object`                      |
| `owner.name` | `string`                      |
| `scheme`     | `string`                      |
| `token`      | `Record`<`string`, `unknown`> |

#### Defined in

packages/mongo-types/src/index.ts:45

---

### InternalLimitedLogEntry

Ƭ **InternalLimitedLogEntry**: { `header?`: `never` ; `ip`: `string` | `null` ;
`until`: [`UnixEpochMs`][2] } | { `header`: `string` | `null` ; `ip?`: `never` ;
`until`: [`UnixEpochMs`][2] }

The shape of an entry in the well-known "limited log" collection.

#### Defined in

packages/mongo-types/src/index.ts:75

---

### InternalRequestLogEntry

Ƭ **InternalRequestLogEntry**: `Object`

The shape of an entry in the well-known "request log" collection.

#### Type declaration

| Name            | Type                  |
| :-------------- | :-------------------- |
| `createdAt`     | [`UnixEpochMs`][2]    |
| `header`        | `string` \| `null`    |
| `ip`            | `string` \| `null`    |
| `method`        | `string` \| `null`    |
| `resStatusCode` | [`HttpStatusCode`][3] |
| `route`         | `string` \| `null`    |

#### Defined in

packages/mongo-types/src/index.ts:63

## Variables

### BANNED_BEARER_TOKEN

• **BANNED_BEARER_TOKEN**: `"banned-h54e-6rt7-gctfh-hrftdygct0"`

This string is guaranteed to be rate limited when running in a test environment
(i.e. `NODE_ENV=test`). This string cannot be used for authenticated HTTP access
to the API in production.

#### Defined in

packages/mongo-types/src/index.ts:32

---

### DEV_BEARER_TOKEN

• **DEV_BEARER_TOKEN**: `"dev-xunn-dev-294a-536h-9751-rydmj"`

This string can be used to authenticate with local and non-production
deployments. This string cannot be used for authenticated HTTP access to the API
in production.

#### Defined in

packages/mongo-types/src/index.ts:39

---

### DUMMY_BEARER_TOKEN

• **DUMMY_BEARER_TOKEN**: `"12349b61-83a7-4036-b060-213784b491"`

This string allows authenticated API access only when running in a test
environment (i.e. `NODE_ENV=test`). This string cannot be used for authenticated
HTTP access to the API in production.

#### Defined in

packages/mongo-types/src/index.ts:25

---

### MACHINE_BEARER_TOKEN

• **MACHINE_BEARER_TOKEN**: `"11111111-1111-1111-1111-111111111111"`

This string is used by database initialization and activity simulation scripts.
This string cannot be used for authenticated HTTP access to the API.

#### Defined in

packages/mongo-types/src/index.ts:18

---

### NULL_BEARER_TOKEN

• **NULL_BEARER_TOKEN**: `"00000000-0000-0000-0000-000000000000"`

This string is guaranteed never to appear in dummy data generated during tests.
In production, this string can be used to represent a `null` or non-existent
token. This string cannot be used for authenticated HTTP access to the API.

#### Defined in

packages/mongo-types/src/index.ts:12

[1]: interfaces/InternalAuthBearerEntry.md
[2]: interfaces/UnixEpochMs.md
[3]: README.md#httpstatuscode
[4]: README.md#internalauthentry
[5]: README.md#internallimitedlogentry
[6]: README.md#internalrequestlogentry
[7]: README.md#banned_bearer_token
[8]: README.md#dev_bearer_token
[9]: README.md#dummy_bearer_token
[10]: README.md#machine_bearer_token
[11]: README.md#null_bearer_token
