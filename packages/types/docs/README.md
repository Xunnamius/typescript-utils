## Table of contents

### Interfaces

- [AnyClass][1]
- [JsonError][2]
- [JsonSuccess][3]

### Type aliases

- [AnyFunction][4]
- [AnyKey][5]
- [HttpStatusCode][6]
- [JsonRegExp][7]
- [NoInfer][8]
- [UnixEpochMs][9]
- [ValidHttpMethod][10]

### Variables

- [validHttpMethods][11]

## Type aliases

### AnyFunction

Ƭ **AnyFunction**: (...`args`: `any`\[]) => `unknown`

#### Type declaration

▸ (...`args`): `unknown`

Represents any function type.

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `...args` | `any`\[] |

##### Returns

`unknown`

#### Defined in

[index.ts:42][12]

---

### AnyKey

Ƭ **AnyKey**: `string` | `number` | `symbol`

Represents any object key/index type.

#### Defined in

[index.ts:36][13]

---

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

[index.ts:57][14]

---

### JsonRegExp

Ƭ **JsonRegExp**: `Object`

`JSON.parse()` by default cannot serialize and deserialize regular expressions.
With ES6, regular expressions can be represented by their `source` and `flags`
properties. This type represents a serialized regular expression with respect to
those properties.

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `flags?` | `string` |
| `source` | `string` |

#### Defined in

[index.ts:9][15]

---

### NoInfer

Ƭ **NoInfer**<`T`>: \[`T`]\[`T` extends `any` ? `0` : `never`]

A no-op that forces the compiler not to infer the value of a generic parameter.
Useful for type hinting and enforcing typechecking with generics.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:31][16]

---

### UnixEpochMs

Ƭ **UnixEpochMs**: `number`

A point in time represented by the number of milliseconds (ms) since the unix
epoch (January 1, 1970 00:00:00 UTC).

**`see`**
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now][17]

#### Defined in

[index.ts:163][18]

---

### ValidHttpMethod

Ƭ **ValidHttpMethod**: typeof [`validHttpMethods`][11]\[`number`]

#### Defined in

[index.ts:154][19]

## Variables

### validHttpMethods

• `Const` **validHttpMethods**: readonly \[`"GET"`, `"HEAD"`, `"POST"`, `"PUT"`,
`"DELETE"`, `"CONNECT"`, `"OPTIONS"`, `"TRACE"`, `"PATCH"`]

All valid HTTP2 methods.

**`see`** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods][20]

#### Defined in

[index.ts:142][21]

[1]: interfaces/AnyClass.md
[2]: interfaces/JsonError.md
[3]: interfaces/JsonSuccess.md
[4]: README.md#anyfunction
[5]: README.md#anykey
[6]: README.md#httpstatuscode
[7]: README.md#jsonregexp
[8]: README.md#noinfer
[9]: README.md#unixepochms
[10]: README.md#validhttpmethod
[11]: README.md#validhttpmethods
[12]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L42
[13]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L36
[14]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L57
[15]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L9
[16]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L31
[17]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
[18]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L163
[19]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L154
[20]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
[21]:
  https://github.com/Xunnamius/typescript-utils/blob/bfaab1b/packages/types/src/index.ts#L142
