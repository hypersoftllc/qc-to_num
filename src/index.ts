
// ==========================================================================
/**
 * Attempts to convert a number-like input to a JavaScript number primitive.
 *
 * If the number-like input cannot be converted to a number, then the default
 * value is returned.  When the default value is undefined, then the input is
 * returned.
 *
 * NOTE: This function behaves differently than the native `Number` constructor
 * in several ways.
 *
 * 1) Won't return a `Number' instance with a type of `'object'` when used with
 *    the new operator.
 *
 * 2) Won't return `NaN` when not convertible (unless you use `NaN` for the
 *    default).
 *
 * 3) Correctly handles `-0` which returns `0' instead of `-0`.
 *
 * 4) Correctly handles `'-0'` which returns `0' instead of `-0`.
 *
 * ```js
 * toNum('+3.1459');                             // `3.1459`
 * toNum('2');                                   // `2`
 * toNum(2.6);                                   // `2.6`
 * toNum(1.2);                                   // `1.2`
 * toNum(1);                                     // `1`
 * toNum(-1);                                    // `-1`
 * toNum(-2.6);                                  // `-2.6`
 * toNum({ valueOf() { return 42; } });          // `42`
 * toNum({ valueOf() { return '42'; } });        // `42`
 *
 * toNum(<inconvertible>);                       // The inconvertible input
 * toNum(<inconvertible>, undefined);            // The inconvertible input
 * toNum(<inconvertible>, { def: undefined });   // The inconvertible input
 *
 * toNum(<inconvertible>, null);                 // `null`
 * toNum(<inconvertible>, { def: null });        // `null`
 * toNumOrNull(<inconvertible>);                 // `null`
 *
 * toNum(<inconvertible>, 0);                    // `0`
 * toNum(<inconvertible>, { def: 0 });           // `0`
 *
 * toNum(<inconvertible>, NaN);                  // `NaN`
 * toNum(<inconvertible>, { def: NaN });         // `NaN`
 *
 * let defObj = ...;
 * toNum(<inconvertible>, defObj);               // Probably not what you want
 * toNum(<inconvertible>, { def: defObj });      // `defObj`
 *
 * toNum();                                      // `undefined`
 * toNumOrNull();                                // `null`
 *
 * toNum(NaN);                                   // `NaN`
 * toNum(NaN, null);                             // `null`
 * toNumOrNull(NaN);                             // `null`
 *
 * toNum('');                                    // `''`
 * toNum('', null);                              // `null`
 * toNumOrNull('');                              // `null`
 * ```
 *
 * @param {*=} input - The value to be converted to a JavaScript number
 *   primitive.  This may also be an object with a custom `valueOf` method that
 *   returns a number or parsible string.
 * @param {*=|{ def=: *}} [def=undefined] - The default value to return if
 *   unable to convert.  This is allowed to be of any data type.  This may also
 *   be an object with a `def` property.  To return an object as a default value,
 *   then wrap it in an object with a `def` property set to the object that is to
 *   be used as the default value.  A default value resolving to `undefined`
 *   means return the input when not convertible.
 *
 * @returns {number|*} The input converted to a number (float or integer) or the
 *   default value if unable to convert.  Note: a value of type number is not
 *   always returned when the default value is returned.
 */
function toNum(input?: any, def?: any | { def?: any }): any {
  let coercedInput: any, output: any;

  if (typeof input == 'number' && input === input) {
    output = input;
  }
  else {
    if (input !== undefined && input !== null && typeof input.valueOf == 'function') {
      coercedInput = input.valueOf();
      output = parseFloat(coercedInput);
    }

    if (output === undefined || output != output) {
      // Resolve default value:
      if (typeof def == 'object' && def !== null) {
        def = def.def;
      }
      else {
        def = def;
      }
      if (def === undefined) {
        def = input;
      }

      output = def;
    }
  }

  return output;
}


/**
 * Like `toNum` but returns `null` if input is not convertible to a number.
 */
function toNumOrNull(input?: any) {
  return toNum(input, null);
}

// ==========================================================================
export { toNum, toNumOrNull };
