[@xunnamius/mongo-types][1] / UnixEpochMs

# Interface: UnixEpochMs

A point in time represented by the number of milliseconds (ms) since the unix
epoch (January 1, 1970 00:00:00 UTC).

**`see`**
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now][2]

## Hierarchy

- `Number`

  ↳ **`UnixEpochMs`**

## Table of contents

### Methods

- [toExponential][3]
- [toFixed][4]
- [toLocaleString][5]
- [toPrecision][6]
- [toString][7]
- [valueOf][8]

## Methods

### toExponential

▸ **toExponential**(`fractionDigits?`): `string`

Returns a string containing a number represented in exponential notation.

#### Parameters

| Name              | Type     | Description                                                                       |
| :---------------- | :------- | :-------------------------------------------------------------------------------- |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Inherited from

Number.toExponential

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:562

---

### toFixed

▸ **toFixed**(`fractionDigits?`): `string`

Returns a string representing a number in fixed-point notation.

#### Parameters

| Name              | Type     | Description                                                                       |
| :---------------- | :------- | :-------------------------------------------------------------------------------- |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Inherited from

Number.toFixed

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:556

---

### toLocaleString

▸ **toLocaleString**(`locales?`, `options?`): `string`

Converts a number to a string by using the current or specified locale.

#### Parameters

| Name       | Type                    | Description                                                                                                                                                                                                                                                                                                           |
| :--------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locales?` | `string` \| `string`\[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `NumberFormatOptions`   | An object that contains one or more properties that specify comparison options.                                                                                                                                                                                                                                       |

#### Returns

`string`

#### Inherited from

Number.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4472

---

### toPrecision

▸ **toPrecision**(`precision?`): `string`

Returns a string containing a number represented either in exponential or
fixed-point notation with a specified number of digits.

#### Parameters

| Name         | Type     | Description                                                           |
| :----------- | :------- | :-------------------------------------------------------------------- |
| `precision?` | `number` | Number of significant digits. Must be in the range 1 - 21, inclusive. |

#### Returns

`string`

#### Inherited from

Number.toPrecision

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:568

---

### toString

▸ **toString**(`radix?`): `string`

Returns a string representation of an object.

#### Parameters

| Name     | Type     | Description                                                                                      |
| :------- | :------- | :----------------------------------------------------------------------------------------------- |
| `radix?` | `number` | Specifies a radix for converting numeric values to strings. This value is only used for numbers. |

#### Returns

`string`

#### Inherited from

Number.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:550

---

### valueOf

▸ **valueOf**(): `number`

Returns the primitive value of the specified object.

#### Returns

`number`

#### Inherited from

Number.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:571

[1]: ../README.md
[2]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
[3]: UnixEpochMs.md#toexponential
[4]: UnixEpochMs.md#tofixed
[5]: UnixEpochMs.md#tolocalestring
[6]: UnixEpochMs.md#toprecision
[7]: UnixEpochMs.md#tostring
[8]: UnixEpochMs.md#valueof
