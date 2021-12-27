[@xunnamius/mongo-types][1] / InternalAuthBearerEntry

# Interface: InternalAuthBearerEntry

The shape of a bearer token entry in the well-known "auth" collection.

## Hierarchy

- [`InternalAuthEntry`][2]

  ↳ **`InternalAuthBearerEntry`**

## Table of contents

### Properties

- [owner][3]
- [scheme][4]
- [token][5]

## Properties

### owner

• **owner**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Inherited from

InternalAuthEntry.owner

#### Defined in

packages/mongo-types/src/index.ts:46

---

### scheme

• **scheme**: `string`

#### Inherited from

InternalAuthEntry.scheme

#### Defined in

packages/mongo-types/src/index.ts:47

---

### token

• **token**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `bearer` | `string` |

#### Overrides

InternalAuthEntry.token

#### Defined in

packages/mongo-types/src/index.ts:55

[1]: ../README.md
[2]: ../README.md#internalauthentry
[3]: InternalAuthBearerEntry.md#owner
[4]: InternalAuthBearerEntry.md#scheme
[5]: InternalAuthBearerEntry.md#token
