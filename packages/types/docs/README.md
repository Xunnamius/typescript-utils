## Table of contents

### Interfaces

- [AnyClass][1]
- [JsonError][2]
- [JsonSuccess][3]
- [UnixEpochMs][4]

### Type aliases

- [AnyFunction][5]
- [AnyKey][6]
- [HttpStatusCode][7]
- [JsonRegExp][8]
- [NoInfer][9]

### Variables

- [validHttpMethods][10]

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

[packages/types/src/index.ts:42][11]

---

### AnyKey

Ƭ **AnyKey**: `string` | `number` | `symbol`

Represents any object key/index type.

#### Defined in

[packages/types/src/index.ts:36][12]

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

[packages/types/src/index.ts:57][13]

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

[packages/types/src/index.ts:9][14]

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

[packages/types/src/index.ts:31][15]

## Variables

### validHttpMethods

• **validHttpMethods**: readonly \[`"GET"`, `"HEAD"`, `"POST"`, `"PUT"`,
`"DELETE"`, `"CONNECT"`, `"OPTIONS"`, `"TRACE"`, `"PATCH"`]

All valid HTTP2 methods.

**`see`** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods][16]

#### Defined in

[packages/types/src/index.ts:142][17]

[1]: interfaces/AnyClass.md
[2]: interfaces/JsonError.md
[3]: interfaces/JsonSuccess.md
[4]: interfaces/UnixEpochMs.md
[5]: README.md#anyfunction
[6]: README.md#anykey
[7]: README.md#httpstatuscode
[8]: README.md#jsonregexp
[9]: README.md#noinfer
[10]: README.md#validhttpmethods
[11]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L42
[12]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L36
[13]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L57
[14]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L9
[15]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L31
[16]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
[17]:
  https://github.com/Xunnamius/typescript-utils/blob/4f7daa8/packages/types/src/index.ts#L142
