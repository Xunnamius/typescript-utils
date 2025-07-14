[**@-xun/types**](../../README.md)

***

[@-xun/types](../../README.md) / [src](../README.md) / LiteralUnknownUnion

# Type Alias: LiteralUnknownUnion\<LiteralType\>

> **LiteralUnknownUnion**\<`LiteralType`\> = `LiteralType` \| `unknown` & `Record`\<`never`, `never`\> \| `null` \| `undefined`

Defined in: [src/index.ts:139](https://github.com/Xunnamius/typescript-utils/blob/7d2364373072a98e170c9cce68346117a9a089a5/src/index.ts#L139)

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
