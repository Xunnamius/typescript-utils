[**@-xun/types**](../../../README.md)

***

[@-xun/types](../../../README.md) / [test/util](../README.md) / expectExceptionsWithMatchingErrors

# Function: expectExceptionsWithMatchingErrors()

> **expectExceptionsWithMatchingErrors**\<`T`\>(`spec`, `errorFn`): `Promise`\<`void`\>

Defined in: node\_modules/@-xun/symbiote/node\_modules/@-xun/jest/dist/packages/jest/src/index.d.ts:220

Maps each element of the `spec` array into a Jest expectation asserting that
`errorFn` either throws an error or rejects. If an assertion fails, a
helpful error message is thrown.

Example:

```js
await expectExceptionsWithMatchingErrors([
 [[param1, param2], 'expected error message 1'],
 [[1, 2, 3], 'expected error message 2']
],
() => {
  // ...
});
```

## Type Parameters

### T

`T` *extends* \[`unknown`[], `string`\][]

## Parameters

### spec

`T`

### errorFn

(`params`, `index`) => `unknown`

## Returns

`Promise`\<`void`\>
