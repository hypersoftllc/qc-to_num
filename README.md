# qc-to_num

A simple JavaScript utility to convert various values to a number.

[![Build Status](https://travis-ci.org/hypersoftllc/qc-to_num.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-to_num)


**What it does that `parseFloat` doesn't**

* Allow a default value to be set instead of returning `NaN`.
* Convert `'-0'` to `0` instead of `-0`.


## Installation

```sh
npm install --save qc-to_num
```


## Example Usage

```js
import { toNum } from 'qc-to_num';

toNum();        // `null`
toNum('');      // `null`
toNum('', { def: 0 }); // `0`
toNum(NaN);     // `null`
toNum(null);    // `null`
toNum('+3.1459');  // 3.1459
toNum('-2.6');  // -2.6
toNum(-2.6);    // -2.6
```
