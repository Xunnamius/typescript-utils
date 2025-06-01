[**@-xun/types**](../../README.md)

***

[@-xun/types](../../README.md) / [src](../README.md) / JsonRegExp

# Type Alias: JsonRegExp

> **JsonRegExp** = `object`

Defined in: [src/index.ts:8](https://github.com/Xunnamius/typescript-utils/blob/8a2a41c11fece9aa42a510058a0d1fa9b8db5358/src/index.ts#L8)

`JSON.parse()` by default cannot serialize and deserialize regular
expressions. With ES6, regular expressions can be represented by their
`source` and `flags` properties. This type represents a serialized regular
expression with respect to those properties.

## Properties

### flags?

> `optional` **flags**: `string`

Defined in: [src/index.ts:8](https://github.com/Xunnamius/typescript-utils/blob/8a2a41c11fece9aa42a510058a0d1fa9b8db5358/src/index.ts#L8)

***

### source

> **source**: `string`

Defined in: [src/index.ts:8](https://github.com/Xunnamius/typescript-utils/blob/8a2a41c11fece9aa42a510058a0d1fa9b8db5358/src/index.ts#L8)
