## Table of contents

### Functions

- [asMockedClass][1]
- [asMockedFunction][2]

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

[index.ts:17][3]

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

[index.ts:20][4]

---

### asMockedFunction

▸ **asMockedFunction**<`T`>(): `jest.MockedFunction`<`T`>

Returns `fn` (via `jest.fn()`) wrapped with Jest mock type definitions.

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `T`  | extends `AnyFunction` = `never` |

#### Returns

`jest.MockedFunction`<`T`>

#### Defined in

[index.ts:7][5]

▸ **asMockedFunction**<`T`>(`fn`): `jest.MockedFunction`<`T`>

#### Type parameters

| Name | Type                  |
| :--- | :-------------------- |
| `T`  | extends `AnyFunction` |

#### Parameters

| Name | Type |
| :--- | :--- |
| `fn` | `T`  |

#### Returns

`jest.MockedFunction`<`T`>

#### Defined in

[index.ts:8][6]

[1]: README.md#asmockedclass
[2]: README.md#asmockedfunction
[3]:
  https://github.com/Xunnamius/typescript-utils/blob/c8772e3/packages/jest-types/src/index.ts#L17
[4]:
  https://github.com/Xunnamius/typescript-utils/blob/c8772e3/packages/jest-types/src/index.ts#L20
[5]:
  https://github.com/Xunnamius/typescript-utils/blob/c8772e3/packages/jest-types/src/index.ts#L7
[6]:
  https://github.com/Xunnamius/typescript-utils/blob/c8772e3/packages/jest-types/src/index.ts#L8
