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
- [WithConfig][9]

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

[types/src/index.ts:42][10]

---

### AnyKey

Ƭ **AnyKey**: `string` | `number` | `symbol`

Represents any object key/index type.

#### Defined in

[types/src/index.ts:36][11]

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

[types/src/index.ts:57][12]

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

[types/src/index.ts:9][13]

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

[types/src/index.ts:31][14]

---

### WithConfig

Ƭ **WithConfig**<`T`>: `T` & { `config?`: `PageConfig` }

This type is used to show a NextPage or NextApiHandler exports a `Config`
object.

#### Type parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `T`  | extends `NextPage` \| `NextApiHandler` |

#### Defined in

[next-types/src/types.ts:7][15]

[1]: interfaces/AnyClass.md
[2]: interfaces/JsonError.md
[3]: interfaces/JsonSuccess.md
[4]: README.md#anyfunction
[5]: README.md#anykey
[6]: README.md#httpstatuscode
[7]: README.md#jsonregexp
[8]: README.md#noinfer
[9]: README.md#withconfig
[10]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/types/src/index.ts#L42
[11]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/types/src/index.ts#L36
[12]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/types/src/index.ts#L57
[13]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/types/src/index.ts#L9
[14]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/types/src/index.ts#L31
[15]:
  https://github.com/Xunnamius/typescript-utils/blob/d7c9da5/packages/next-types/src/types.ts#L7
