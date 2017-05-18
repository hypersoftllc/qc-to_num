# qc-to_num

[![Build Status][travis-svg]][travis-url]

A simple JavaScript utility to convert various values to a number.

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


[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_num.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_num
