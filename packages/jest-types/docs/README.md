## Table of contents

### Type aliases

- [AnyFunction][1]

### Functions

- [asMockedClass][2]
- [asMockedFunction][3]

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

types/dist/types/packages/types/src/index.d.ts:37

## Functions

### asMockedClass

▸ **asMockedClass**<`T`>(): `jest.MockedClass`<`T`>

Returns `classConstructor` (via `jest.fn()`) wrapped with Jest mock type
definitions.

#### Type parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `T`  | extends `Constructable` = `never` |

#### Returns

`jest.MockedClass`<`T`>

#### Defined in

[jest-types/src/index.ts:19][4]

▸ **asMockedClass**<`T`>(`constructor`): `jest.MockedClass`<`T`>

#### Type parameters

| Name | Type                    |
| :--- | :---------------------- |
| `T`  | extends `Constructable` |

#### Parameters

| Name          | Type |
| :------------ | :--- |
| `constructor` | `T`  |

#### Returns

`jest.MockedClass`<`T`>

#### Defined in

[jest-types/src/index.ts:22][5]

---

### asMockedFunction

▸ **asMockedFunction**<`T`>(): `jest.MockedFunction`<`T`>

Returns `fn` (via `jest.fn()`) wrapped with Jest mock type definitions.

#### Type parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `T`  | extends [`AnyFunction`][1] = `never` |

#### Returns

`jest.MockedFunction`<`T`>

#### Defined in

[jest-types/src/index.ts:9][6]

▸ **asMockedFunction**<`T`>(`fn`): `jest.MockedFunction`<`T`>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `T`  | extends [`AnyFunction`][1] |

#### Parameters

| Name | Type |
| :--- | :--- |
| `fn` | `T`  |

#### Returns

`jest.MockedFunction`<`T`>

#### Defined in

[jest-types/src/index.ts:10][7]

[1]: README.md#anyfunction
[2]: README.md#asmockedclass
[3]: README.md#asmockedfunction
[4]:
  https://github.com/Xunnamius/typescript-utils/blob/06152bc/packages/jest-types/src/index.ts#L19
[5]:
  https://github.com/Xunnamius/typescript-utils/blob/06152bc/packages/jest-types/src/index.ts#L22
[6]:
  https://github.com/Xunnamius/typescript-utils/blob/06152bc/packages/jest-types/src/index.ts#L9
[7]:
  https://github.com/Xunnamius/typescript-utils/blob/06152bc/packages/jest-types/src/index.ts#L10
