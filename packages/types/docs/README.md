## Table of contents

### Interfaces

- [AnyClass][1]
- [JsonError][2]
- [JsonSuccess][3]

### Type Aliases

- [AnyFunction][4]
- [AnyKey][5]
- [HttpStatusCode][6]
- [JsonRegExp][7]
- [NoInfer][8]
- [UnixEpochMs][9]
- [ValidHttpMethod][10]

### Variables

- [validHttpMethods][11]

### Functions

- [isError][12]

## Type Aliases

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

[index.ts:42][13]

---

### AnyKey

Ƭ **AnyKey**: `string` | `number` | `symbol`

Represents any object key/index type.

#### Defined in

[index.ts:36][14]

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

[index.ts:57][15]

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

[index.ts:9][16]

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

[index.ts:31][17]

---

### UnixEpochMs

Ƭ **UnixEpochMs**: `number`

A point in time represented by the number of milliseconds (ms) since the unix
epoch (January 1, 1970 00:00:00 UTC).

**`see`**
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now][18]

#### Defined in

[index.ts:163][19]

---

### ValidHttpMethod

Ƭ **ValidHttpMethod**: typeof [`validHttpMethods`][11]\[`number`]

#### Defined in

[index.ts:154][20]

## Variables

### validHttpMethods

• `Const` **validHttpMethods**: readonly \[`"GET"`, `"HEAD"`, `"POST"`, `"PUT"`,
`"DELETE"`, `"CONNECT"`, `"OPTIONS"`, `"TRACE"`, `"PATCH"`]

All valid HTTP2 methods.

**`see`** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods][21]

#### Defined in

[index.ts:142][22]

## Functions

### isError

▸ **isError**(`obj`): obj is Error

A type guard that returns `true` if the object has the `name` and `message`
properties. Being a type guard, it also asserts the existence of these
properties to TypeScript.

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `obj` | `unknown` |

#### Returns

obj is Error

#### Defined in

[index.ts:170][23]

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
[12]: README.md#iserror
[13]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L42
[14]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L36
[15]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L57
[16]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L9
[17]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L31
[18]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
[19]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L163
[20]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L154
[21]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
[22]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L142
[23]:
  https://github.com/Xunnamius/typescript-utils/blob/d642ac0/packages/types/src/index.ts#L170
