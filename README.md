# qc-to_num

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

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


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-to_num/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-to_num?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-to_num.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-to_num
[license-image]: http://img.shields.io/npm/l/qc-to_num.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-to_num
[npm-badge-png]: https://nodei.co/npm/qc-to_num.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_num.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_num
