
import { round } from 'qc-round';
import { typeOf } from 'qc-type_of';

// ==========================================================================
/**
 * Attempts to convert a number-like value to a JavaScript `number`.  `undefined`, `null`, and `NaN` return the
 * default value (`null`).
 *
 * ```js
 * toNum('2'); // 2
 * toNum(2.6); // 2.6
 * toNum(1.2); // 1.2
 * toNum(1); // 1
 * toNum(-1); // -1
 * toNum(-2.6); // -2.6
 * toNum('1234.5678', { exp: -2 }); // 1234.57
 * ```
 *
 * @param {*} input - The number like value to be converted to a JavaScript `number`.  This may also be an object with
 *   a custom `valueOf` method that returns a number or parsible string.
 * @param {Object} [opts] - The options to use when doing the conversion.
 * @param {*} [opts.def=null] - The default value to return if unable to convert.  This is allowed to be of any
 *   data type.
 * @param {*} [opts.exp=null] - The exponent (the 10 logarithm of the adjustment base).
 *
 * @returns {number|*} The input converted to a number (float or integer) or the default value if unable to
 *   convert.  Note: a value of type number is not always returned when the default value is returned.
 */
function toNum(input?: any, opts?: { def?: any, exp?: any }): any {
  let def: any, exp: any, output: any, typeOfInput: string;

  opts = opts || {};
  def = opts.hasOwnProperty('def') ? opts.def : null;
  exp = opts.hasOwnProperty('exp') ? opts.exp : null;
  if (input) {
    typeOfInput = typeOf(input);
    if (typeOfInput == 'number') {
      output = input.valueOf();
    }
    else if (typeOfInput == 'infinity') {
      output = input;
    }
    else {
      input = input.valueOf();
      output = parseFloat(input);
      if (isNaN(output)) {
        output = def;
      }
    }
  }
  else if (input === 0) {
    return 0;
  }
  else {
    return def;
  }
  output = round(output, exp);

  return output;
}


// ==========================================================================
export { toNum, toNum as to_num };
