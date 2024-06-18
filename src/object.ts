import './number';
import { DeepValue, Obj, RecursiveKeyOf, Split } from './type';

export {};

declare global {
  interface Object {
    /**
     * Checks if the object is null, undefined, empty string, or an empty array or object.
     *
     * @return {boolean} True if the object is null, undefined, empty string, or an empty array or object, false otherwise.
     */
    isEmpty<T>(this: NonNullable<T>): boolean;

    /**
     * Checks if the object is not empty.
     *
     * @return {boolean} True if the object is not empty, false otherwise.
     */
    isNotEmpty<T>(this: NonNullable<T>): boolean;

    /**
     * Checks if the object exists and is not empty. If a callback function is provided, it is called with the object as an argument and the return value is returned. Otherwise, true is returned.
     *
     * @param {((value: T) => R) | undefined} callback - An optional callback function to be called with the object as an argument.
     * @return {R | boolean} The return value of the callback function if provided, or true if the object exists and is not empty, or false otherwise.
     */
    exist<T, R>(this: NonNullable<Object>, callback?: (value: T) => R): R | boolean;

    /**
     * Merges two objects into a single object.
     *
     * @param {R} obj - The object to merge into the first object.
     * @return {T & R} - The merged object.
     */
    mergeWith<T, R>(this: NonNullable<T>, obj: R): T & R;

    /**
     * Checks if the object is a number. If a callback function is provided, it is called with the number value as an argument and the return value is returned. Otherwise, true is returned if the object is a number and not NaN, false otherwise.
     *
     * @param {((value: number) => R) | undefined} callback - An optional callback function to be called with the number value as an argument.
     * @return {R | boolean} The return value of the callback function if provided, or true if the object is a number and not NaN, false otherwise.
     */
    isNumber<T, R>(this: NonNullable<T>, callback?: (value: number) => R): R | boolean;

    /**
     * Parses the current object as a number and returns the parsed integer value.
     *
     * @return {number} The parsed integer value of the object, or NaN if the object is not a number.
     */
    parseInt<T>(this: NonNullable<T>): number;

    /**
     * Parses the current object as a floating-point number.
     *
     * @return {number} The parsed floating-point number, or NaN if the conversion fails.
     */
    parseFloat<T>(this: NonNullable<T>): number;

    /**
     * Returns an array of the object's property keys.
     *
     * @return {keyof T[]} An array containing the keys of the object's properties.
     */
    objectKeys<T>(this: Obj): (keyof T)[];

    /**
     * Returns an array of the object's property values.
     *
     * @return {T[keyof T][]} An array containing the values of the object's properties.
     */
    objectValues<T>(this: Obj): T[keyof T][];

    /**
     * Returns an array of key-value pairs representing the object's properties.
     *
     * @return {Array<[keyof T, T[keyof T]]>} An array of key-value pairs representing the object's properties.
     */
    objectEntries<T>(this: Obj): [keyof T, T[keyof T]][];

    /**
     * A function that retrieves a deeply nested value from an object based on a nested key.
     *
     * @param {K} key - The nested key to access the value.
     * @return {DeepValue<T, Split<K, '.'>>} The deeply nested value corresponding to the given key.
     */
    getDeep<T extends Obj, K extends RecursiveKeyOf<T>>(this: T, key: K): DeepValue<T, Split<K, '.'>>;
  }
}

Object.defineProperties(Object.prototype, {
  isEmpty: {
    value: function (this: NonNullable<Object>): boolean {
      switch (true) {
        case this === '':
        case Array.isArray(this) && this.length === 0:
        case typeof this === 'object' && Object.keys(this).length === 0:
          return true;
        default:
          return false;
      }
    },
    enumerable: false,
  },
  isNotEmpty: {
    value: function (this: NonNullable<Object>): boolean {
      return !this.isEmpty();
    },
    enumerable: false,
  },
  exist: {
    value: function <T, R>(this: NonNullable<T>, callback?: (value: T) => R): R | boolean {
      if (this.isNotEmpty()) {
        if (callback) {
          return callback(this);
        }
        return true;
      }
      return false;
    },
    enumerable: false,
  },
  mergeWith: {
    value: function <T, R>(this: NonNullable<T>, obj: R): T & R {
      return { ...this, ...obj };
    },
    enumerable: false,
  },
  isNumber: {
    value: function <T, R>(this: NonNullable<T>, callback?: (value: number) => R): R | boolean {
      const number = Number(this);
      if (isNaN(number)) {
        return false;
      }
      if (callback) {
        return callback(number);
      }
      return true;
    },
    enumerable: false,
  },
  parseInt: {
    value: function <T>(this: NonNullable<T>): number {
      const result = this.isNumber((it) => Math.trunc(it));
      if (typeof result === 'number') {
        return result;
      }
      return NaN;
    },
    enumerable: false,
  },
  parseFloat: {
    value: function <T>(this: NonNullable<T>): number {
      const result = Number(this);
      return isNaN(result) ? NaN : result;
    },
    enumerable: false,
  },
  objectKeys: {
    value: function <T>(this: object): (keyof T)[] {
      return Object.keys(this) as (keyof T)[];
    },
    enumerable: false,
  },
  objectValues: {
    value: function <T>(this: object): T[keyof T][] {
      return Object.values(this) as T[keyof T][];
    },
    enumerable: false,
  },
  objectEntries: {
    value: function <T>(this: object): [keyof T, T[keyof T]][] {
      return Object.entries(this) as [keyof T, T[keyof T]][];
    },
    enumerable: false,
  },
  getDeep: {
    value: function <T extends Obj, K extends RecursiveKeyOf<T>>(
      this: T,
      key: K
    ): DeepValue<T, Split<K, '.'>> {
      const keys = key.split('.');
      return keys.reduce((acc, k) => {
        if (acc?.[k]?.isNotEmpty()) {
          return acc[k];
        }
        return undefined;
      }, this) as DeepValue<T, Split<K, '.'>>;
    },
    enumerable: false,
  },
});
