
import { toNum, toNumOrNull } from './index';

describe('qc-to_num', () => {

  describe('`toNum`', () => {

    it('should be a function', () => {
      expect(typeof toNum).toBe('function');
    });

    it('called with no arguments should return `undefined`', () => {
      expect(toNum()).toBeUndefined();
    });

    it('called with `arguments` should return input value', function () {
      expect(toNum(arguments)).toBe(arguments);
    });

    it('called with inconvertible input should return default value', function () {
      let def: any;

      def = [];
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = false;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = true;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = new Date();
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = new Error('Help!');
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = function () {};
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = arguments;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = 123;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = -123;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = Number.MAX_VALUE;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = Number.MIN_VALUE;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = Number.MAX_SAFE_INTEGER;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = Number.MIN_SAFE_INTEGER;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = NaN;
      expect(toNum([], def)).toEqual(NaN);
      expect(toNum([], { def })).toEqual(NaN);
      expect(toNum(['not empty'], def)).toEqual(NaN);
      expect(toNum(['not empty'], { def })).toEqual(NaN);
      expect(toNum(true, def)).toEqual(NaN);
      expect(toNum(true, { def })).toEqual(NaN);
      expect(toNum(false, def)).toEqual(NaN);
      expect(toNum(false, { def })).toEqual(NaN);
      expect(toNum(new Error('Help!'), def)).toEqual(NaN);
      expect(toNum(new Error('Help!'), { def })).toEqual(NaN);
      expect(toNum(function () {}, def)).toEqual(NaN);
      expect(toNum(function () {}, { def })).toEqual(NaN);
      expect(toNum(arguments, def)).toEqual(NaN);
      expect(toNum(arguments, { def })).toEqual(NaN);
      expect(toNum(NaN, def)).toEqual(NaN);
      expect(toNum(NaN, { def })).toEqual(NaN);
      expect(toNum(Number.NaN, def)).toEqual(NaN);
      expect(toNum(Number.NaN, { def })).toEqual(NaN);
      expect(toNum({}, def)).toEqual(NaN);
      expect(toNum({}, { def })).toEqual(NaN);
      expect(toNum({ prop: 'not empty' }, def)).toEqual(NaN);
      expect(toNum({ prop: 'not empty' }, { def })).toEqual(NaN);
      expect(toNum(/regexp/, def)).toEqual(NaN);
      expect(toNum(/regexp/, { def })).toEqual(NaN);
      expect(toNum('', def)).toEqual(NaN);
      expect(toNum('', { def })).toEqual(NaN);
      expect(toNum('not empty', def)).toEqual(NaN);
      expect(toNum('not empty', { def })).toEqual(NaN);
      expect(toNum(null, def)).toEqual(NaN);
      expect(toNum(null, { def })).toEqual(NaN);
      expect(toNum(undefined, def)).toEqual(NaN);
      expect(toNum(undefined, { def })).toEqual(NaN);

      def = {};
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = /def/;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = '';
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = 'not empty';
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);

      def = null;
      expect(toNum([], def)).toBe(def);
      expect(toNum([], { def })).toBe(def);
      expect(toNum(['not empty'], def)).toBe(def);
      expect(toNum(['not empty'], { def })).toBe(def);
      expect(toNum(true, def)).toBe(def);
      expect(toNum(true, { def })).toBe(def);
      expect(toNum(false, def)).toBe(def);
      expect(toNum(false, { def })).toBe(def);
      expect(toNum(new Error('Help!'), def)).toBe(def);
      expect(toNum(new Error('Help!'), { def })).toBe(def);
      expect(toNum(function () {}, def)).toBe(def);
      expect(toNum(function () {}, { def })).toBe(def);
      expect(toNum(arguments, def)).toBe(def);
      expect(toNum(arguments, { def })).toBe(def);
      expect(toNum(NaN, def)).toBe(def);
      expect(toNum(NaN, { def })).toBe(def);
      expect(toNum(Number.NaN, def)).toBe(def);
      expect(toNum(Number.NaN, { def })).toBe(def);
      expect(toNum({}, def)).toBe(def);
      expect(toNum({}, { def })).toBe(def);
      expect(toNum({ prop: 'not empty' }, def)).toBe(def);
      expect(toNum({ prop: 'not empty' }, { def })).toBe(def);
      expect(toNum(/regexp/, def)).toBe(def);
      expect(toNum(/regexp/, { def })).toBe(def);
      expect(toNum('', def)).toBe(def);
      expect(toNum('', { def })).toBe(def);
      expect(toNum('not empty', def)).toBe(def);
      expect(toNum('not empty', { def })).toBe(def);
      expect(toNum(null, def)).toBe(def);
      expect(toNum(null, { def })).toBe(def);
      expect(toNum(undefined, def)).toBe(def);
      expect(toNum(undefined, { def })).toBe(def);
    });

    it('called with `arguments` and default value should return default value', function () {
      const input = arguments;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `undefined` should return input value', () => {
      expect(toNum(undefined)).toBeUndefined();
    });

    it('called with `undefined` and default value should return default value', () => {
      const input = undefined;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `null` should return input value', () => {
      expect(toNum(null)).toBeNull();
    });

    it('called with `null` and default value should return default value', () => {
      const input = null;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `NaN` should return input value', () => {
      expect(toNum(NaN)).toEqual(NaN);
    });

    it('called with `NaN` and default value should return default value', () => {
      const input = NaN;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toEqual(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toEqual(input);
    });

    it('called with `"NaN"` should return input value', () => {
      expect(toNum('NaN')).toBe('NaN');
    });

    it('called with `"NaN"` and default value should return default value', () => {
      const input = 'NaN';
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `false` should return input value', () => {
      expect(toNum(false)).toBe(false);
    });

    it('called with `false` and default value should return default value', () => {
      const input = false;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `true` should return input value', () => {
      expect(toNum(true)).toBe(true);
    });

    it('called with `true` and default value should return default value', () => {
      const input = true;
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `-Infinity` should return `-Infinity`', () => {
      const input = -Infinity;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(-Infinity);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toNum(input, 0);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, '');
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, false);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, null);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `"-Infinity"` should return `-Infinity`', () => {
      const input = '-Infinity';
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(-Infinity);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toNum(input, 0);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, '');
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, false);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, null);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(-Infinity);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `-Number.POSITIVE_INFINITY` should return `-Number.POSITIVE_INFINITY`', () => {
      const input = -Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, 0);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, '');
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, false);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, null);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return `Number.NEGATIVE_INFINITY`', () => {
      const input = Number.NEGATIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, 0);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, '');
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, false);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, null);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toNum(input, { def: undefined });
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

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(Infinity);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toNum(input, 0);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, '');
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, false);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, null);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `"Infinity"` should return `Infinity`', () => {
      const input = "Infinity";
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(Infinity);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toNum(input, 0);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, '');
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, false);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, null);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(Infinity);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` should return `Number.POSITIVE_INFINITY`', () => {
      const input = Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toNum(input);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(Number.POSITIVE_INFINITY);

      toValue = toNum(input, 0);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, '');
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, false);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, null);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: null });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, undefined);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toNum(input, { def: undefined });
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

    it('called with an inconvertible value should return input value', function () {
      let input: any;

      input = arguments;
      expect(toNum(input)).toBe(input);

      input = [];
      expect(toNum(input)).toBe(input);

      input = ['not empty'];
      expect(toNum(input)).toBe(input);

      input = false;
      expect(toNum(input)).toBe(input);

      input = true;
      expect(toNum(input)).toBe(input);

      input = new Error('Help!');
      expect(toNum(input)).toBe(input);

      input = function () {};
      expect(toNum(input)).toBe(input);

      input = NaN;
      expect(toNum(input)).toEqual(input);

      input = {};
      expect(toNum(input)).toBe(input);

      input = { prop: 'not empty' };
      expect(toNum(input)).toBe(input);

      input = /regexp/;
      expect(toNum(input)).toBe(input);

      input = '';
      expect(toNum(input)).toBe(input);

      input = 'not empty';
      expect(toNum(input)).toBe(input);

      input = null;
      expect(toNum(input)).toBe(input);

      input = undefined;
      expect(toNum(input)).toBe(input);
    });

    it('called with an inconvertible value and default value should return default value', () => {
      const input = 'foo';
      let toValue: any;

      toValue = toNum(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toNum(input, 0);
      expect(toValue).toBe(0);

      toValue = toNum(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toNum(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toNum(input, '');
      expect(toValue).toBe('');

      toValue = toNum(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toNum(input, false);
      expect(toValue).toBe(false);

      toValue = toNum(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toNum(input, null);
      expect(toValue).toBeNull();

      toValue = toNum(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toNum(input, undefined);
      expect(toValue).toBe(input);

      toValue = toNum(input, { def: undefined });
      expect(toValue).toBe(input);
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

    it('called with an object implementing the `valueOf` method that returns an inconvertible value should return input value', () => {
      let input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return arguments; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return []; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return ['not empty']; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return false; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return true; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return new Error('Help!'); } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return function () {}; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return NaN; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return {}; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return { prop: 'not empty' }; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return /regexp/; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return ''; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return 'not empty'; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return null; } };
      expect(toNum(input)).toBe(input);

      input = { valueOf: function () { return undefined; } };
      expect(toNum(input)).toBe(input);
    });

  });

  describe('`toNumOrNull`', () => {

    it('should be a function', () => {
      expect(typeof toNumOrNull).toBe('function');
    });

    it('called with no arguments should return `null`', () => {
      expect(toNumOrNull()).toBeNull();
    });

    it('called with inconvertible input should return `null`', function () {
      expect(toNumOrNull(arguments)).toBeNull();
      expect(toNumOrNull([])).toBeNull();
      expect(toNumOrNull(['not empty'])).toBeNull();
      expect(toNumOrNull(new Error('Help!'))).toBeNull();
      expect(toNumOrNull(function () {})).toBeNull();
      expect(toNumOrNull({})).toBeNull();
      expect(toNumOrNull({ prop: 'not empty' })).toBeNull();
      expect(toNumOrNull(null)).toBeNull();
      expect(toNumOrNull(NaN)).toBeNull();
      expect(toNumOrNull(Number.NaN)).toBeNull();
      expect(toNumOrNull(/regexp/)).toBeNull();
      expect(toNumOrNull('')).toBeNull();
      expect(toNumOrNull('not empty')).toBeNull();
      expect(toNumOrNull(undefined)).toBeNull();
    });

  });

});
