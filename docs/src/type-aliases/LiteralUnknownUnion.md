[**@-xun/types**](../../README.md)

***

[@-xun/types](../../README.md) / [src](../README.md) / LiteralUnknownUnion

# Type Alias: LiteralUnknownUnion\<LiteralType\>

> **LiteralUnknownUnion**\<`LiteralType`\> = `LiteralType` \| `unknown` & `Record`\<`never`, `never`\> \| `null` \| `undefined`

Defined in: [src/index.ts:139](https://github.com/Xunnamius/typescript-utils/blob/6ee5f41475a2c203dd166e2a1981870136a34cdd/src/index.ts#L139)

An extension of type-fest's LiteralUnion that functions with
`unknown` as `BaseType`.

The point of this function is to make intellisense suggestions available for
parameters that expect a certain shape but initially accept any (i.e.
`unknown`) shape. For example, a function that accepts user input where said
function asserts its input parameter is of a specific type, even though the
argument passed through that parameter could technically be of any type.

## Type Parameters

### LiteralType

`LiteralType`
