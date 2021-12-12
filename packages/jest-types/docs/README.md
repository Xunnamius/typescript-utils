## Table of contents

### Functions

- [asMockedFunction][1]

## Functions

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

[index.ts:8][2]

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

[index.ts:9][3]

[1]: README.md#asmockedfunction
[2]:
  https://github.com/Xunnamius/typescript-utils/blob/c36f455/packages/jest-types/src/index.ts#L8
[3]:
  https://github.com/Xunnamius/typescript-utils/blob/c36f455/packages/jest-types/src/index.ts#L9
