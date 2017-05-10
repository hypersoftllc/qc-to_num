
import { to_num, toNum } from './index';

describe('qc-to_num', () => {

  describe('`toNum`', () => {

    it('should be a function', () => {
      expect(typeof toNum).toBe('function');
    });

    it('called with no arguments should return default default value', () => {
      expect(toNum()).toBeNull();
    });

    it('called with `arguments` should return default default value', function () {
      expect(toNum(arguments)).toBeNull();
    });

    it('called with `arguments` and default value should return default value', function () {
      const input = arguments;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `undefined` should return default default value', () => {
      expect(toNum(undefined)).toBeNull();
    });

    it('called with `undefined` and default value should return default value', () => {
      const input = undefined;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `null` should return default default value', () => {
      expect(toNum(null)).toBeNull();
    });

    it('called with `null` and default value should return default value', () => {
      const input = null;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `NaN` should return default default value', () => {
      expect(toNum(NaN)).toBeNull();
    });

    it('called with `NaN` and default value should return default value', () => {
      const input = NaN;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `"NaN"` should return default default value', () => {
      expect(toNum('NaN')).toBeNull();
    });

    it('called with `"NaN"` and default value should return default value', () => {
      const input = 'NaN';
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `false` should return default default value', () => {
      expect(toNum(false)).toBeNull();
    });

    it('called with `false` and default value should return default value', () => {
      const input = false;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `true` should return default default value', () => {
      expect(toNum(true)).toBeNull();
    });

    it('called with `true` and default value should return default value', () => {
      const input = true;
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `-Infinity` should return `-Infinity`', () => {
      let toValue = toNum(-Infinity);
      expect(toValue).toBe(-Infinity);
    });

    it('called with `"-Infinity"` should return `-Infinity`', () => {
      let toValue = toNum('-Infinity');
      expect(toValue).toBe(-Infinity);
    });

    it('called with `-Number.POSITIVE_INFINITY` should return `-Number.POSITIVE_INFINITY`', () => {
      const input = -Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: Infinity });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: 2 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: 0 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: -2 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: -Infinity });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return `Number.NEGATIVE_INFINITY`', () => {
      const input = Number.NEGATIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { exp: Infinity });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { exp: 2 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { exp: 0 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { exp: -2 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { exp: -Infinity });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `-Number.MAX_VALUE` should return `-Number.MAX_VALUE`', () => {
      let toValue = toNum(-Number.MAX_VALUE);

      expect(toValue).toBe(-Number.MAX_VALUE);
    });

    it('called with `-Number.MIN_VALUE` should return `-Number.MIN_VALUE`', () => {
      let toValue = toNum(-Number.MIN_VALUE);

      expect(toValue).toBe(-Number.MIN_VALUE);
    });

    it('called with `-0` should return `0`', () => {
      let toValue = toNum(-0);

      expect(toValue).toBe(0);
    });

    it('called with `0` should return `0`', () => {
      let toValue = toNum(0);

      expect(toValue).toBe(0);
    });

    it('called with `"-0"` should return `0`', () => {
      let toValue = toNum('-0');

      expect(toValue).toBe(0);
    });

    it('called with `"0"` should return `0`', () => {
      let toValue = toNum("0");

      expect(toValue).toBe(0);
    });

    it('called with `Number.MIN_VALUE` should return `Number.MIN_VALUE`', () => {
      let toValue = toNum(Number.MIN_VALUE);

      expect(toValue).toBe(Number.MIN_VALUE);
    });

    it('called with `Number.MAX_VALUE` should return `Number.MAX_VALUE`', () => {
      let toValue = toNum(Number.MAX_VALUE);

      expect(toValue).toBe(Number.MAX_VALUE);
    });

    it('called with `Infinity` should return `Infinity`', () => {
      const input = Infinity;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: Infinity });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: 2 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: -2 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: -Infinity });
      expect(toValue).toBe(Infinity);
    });

    it('called with `"Infinity"` should return `Infinity`', () => {
      const input = "Infinity";
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: Infinity });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: 2 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: -2 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { exp: -Infinity });
      expect(toValue).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` should return `Number.POSITIVE_INFINITY`', () => {
      const input = Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: Infinity });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: 2 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: 0 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: -2 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { exp: -Infinity });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with a number value should return number', () => {
      let toValue: any;

      toValue = toNum(-6.022e23);
      expect(toValue).toBe(-6.022e23);
      expect(toValue).toBe(-602200000000000000000000);

      toValue = toNum(-1e4);
      expect(toValue).toBe(-1e4);
      expect(toValue).toBe(-10000);

      toValue = toNum(-2.6);
      expect(toValue).toBe(-2.6);

      toValue = toNum(-1);
      expect(toValue).toBe(-1);

      toValue = toNum(1);
      expect(toValue).toBe(1);
      expect(toValue).toBe(1.0);

      toValue = toNum(1.2);
      expect(toValue).toBe(1.2);

      toValue = toNum(2.6);
      expect(toValue).toBe(2.6);

      toValue = toNum(1e4);
      expect(toValue).toBe(1e4);
      expect(toValue).toBe(10000);

      toValue = toNum(6.022e23);
      expect(toValue).toBe(6.022e23);
      expect(toValue).toBe(602200000000000000000000);
    });

    it('called with a `Number` instance should return number primitive', () => {
      let toValue: any;

      toValue = toNum(new Number(-2.6));
      expect(toValue).toBe(-2.6);

      toValue = toNum(new Number(-1));
      expect(toValue).toBe(-1);

      toValue = toNum(new Number(1));
      expect(toValue).toBe(1);
      expect(toValue).toBe(1.0);

      toValue = toNum(new Number(1.2));
      expect(toValue).toBe(1.2);

      toValue = toNum(new Number(2.6));
      expect(toValue).toBe(2.6);
    });

    it('called with a parsible string value should return number', () => {
      let toValue: any;

      toValue = toNum('-6.022e23');
      expect(toValue).toBe(-6.022e23);
      expect(toValue).toBe(-602200000000000000000000);

      toValue = toNum('-1e4');
      expect(toValue).toBe(-1e4);
      expect(toValue).toBe(-10000);

      toValue = toNum('-2.6');
      expect(toValue).toBe(-2.6);

      toValue = toNum('-2');
      expect(toValue).toBe(-2);
      expect(toValue).toBe(-2.0);

      toValue = toNum('2');
      expect(toValue).toBe(2);
      expect(toValue).toBe(2.0);

      toValue = toNum('2.6');
      expect(toValue).toBe(2.6);

      toValue = toNum('1e4');
      expect(toValue).toBe(1e4);
      expect(toValue).toBe(10000);

      toValue = toNum('6.022e23');
      expect(toValue).toBe(6.022e23);
      expect(toValue).toBe(602200000000000000000000);
    });

    it('called with an unparsible string value should return default default value', () => {
      expect(toNum('')).toBeNull();
      expect(toNum('foo')).toBeNull();
    });

    it('called with an unparsible string value and default value should return default value', () => {
      const input = 'foo';
      let toValue: any;

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with an object implementing the `valueOf` method that returns a number value should return the number', () => {
      let date: Date, input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return -2.6; } };
      toValue = toNum(input);
      expect(toValue).toBe(-2.6);

      input = { valueOf: function () { return -1; } };
      toValue = toNum(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return 1; } };
      toValue = toNum(input);
      expect(toValue).toBe(1);
      expect(toValue).toBe(1.0);

      input = { valueOf: function () { return 1.2; } };
      toValue = toNum(input);
      expect(toValue).toBe(1.2);

      input = { valueOf: function () { return 2.6; } };
      toValue = toNum(input);
      expect(toValue).toBe(2.6);

      date = new Date(Date.UTC(2001, 0, 1, 12));
      toValue = toNum(date);
      expect(toValue).toBe(978350400000);

    });

    it('called with an object implementing the `valueOf` method that returns a parsible value should return the number', () => {
      let input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return '-2.6'; } };
      toValue = toNum(input);
      expect(toValue).toBe(-2.6);

      input = { valueOf: function () { return '-1'; } };
      toValue = toNum(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return '1'; } };
      toValue = toNum(input);
      expect(toValue).toBe(1);
      expect(toValue).toBe(1.0);

      input = { valueOf: function () { return '1.2'; } };
      toValue = toNum(input);
      expect(toValue).toBe(1.2);

      input = { valueOf: function () { return '2.6'; } };
      toValue = toNum(input);
      expect(toValue).toBe(2.6);
    });

    it('called with a number value and non-`null` exp option should return rounded number', () => {
      let toValue: any;

      toValue = toNum(-1234.5678, { exp: 2 });
      expect(toValue).toBe(-1200);

      toValue = toNum(-1234.5678, { exp: 1 });
      expect(toValue).toBe(-1230);

      toValue = toNum(-1234.5678, { exp: 0 });
      expect(toValue).toBe(-1235);

      toValue = toNum(-1234.5678, { exp: -1 });
      expect(toValue).toBe(-1234.6);

      toValue = toNum(-1234.5678, { exp: -2 });
      expect(toValue).toBe(-1234.57);

    });

  });

  describe('`to_num`', () => {

    it('should be a function', () => {
      expect(typeof to_num).toBe('function');
    });

    it('should be an alias of `toNum`', () => {
      expect(to_num).toBe(toNum);
    });

  });

});
