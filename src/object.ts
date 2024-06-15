import './number';
import { Obj } from './type';

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
    merge<T, R>(this: NonNullable<T>, obj: R): T & R;

    /**
     * Checks if the object is a number. If a callback function is provided, it is called with the number value as an argument and the return value is returned. Otherwise, true is returned if the object is a number and not NaN, false otherwise.
     *
     * @param {((value: number) => R) | undefined} callback - An optional callback function to be called with the number value as an argument.
     * @return {R | boolean} The return value of the callback function if provided, or true if the object is a number and not NaN, false otherwise.
     */
    isNumber<T, R>(this: NonNullable<T>, callback?: (value: number) => R): R | boolean;

    parseInt<T>(this: NonNullable<T>): number;

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
  }
}

Object.prototype.isEmpty = function (this: NonNullable<Object>): boolean {
  switch (true) {
    case this === '':
    case Array.isArray(this) && this.length === 0:
    case typeof this === 'object' && Object.keys(this).length === 0:
      return true;
    default:
      return false;
  }
};

Object.prototype.isNotEmpty = function (this: NonNullable<Object>): boolean {
  return !this.isEmpty();
};

Object.prototype.exist = function <T, R>(
  this: NonNullable<T>,
  callback?: (value: T) => R
): R | boolean {
  if (this.isNotEmpty()) {
    if (callback) {
      return callback(this);
    }
    return true;
  }
  return false;
};

Object.prototype.merge = function <T, R>(this: NonNullable<T>, obj: R): T & R {
  return { ...this, ...obj };
};

Object.prototype.isNumber = function <T, R>(
  this: NonNullable<T>,
  callback?: (value: number) => R
): R | boolean {
  const number = Number(this);
  if (isNaN(number)) {
    return false;
  }
  if (callback) {
    return callback(number);
  }
  return true;
};

Object.prototype.parseInt = function <T>(this: NonNullable<T>): number {
  const isNumber = this.isNumber((it) => it.trunc());
  if (typeof isNumber === 'number') {
    return isNumber;
  }
  return NaN;
};

Object.prototype.parseFloat = function <T>(this: NonNullable<T>): number {
  const number = Number(this);
  return isNaN(number) ? NaN : number;
};

Object.prototype.objectKeys = function <T>(this: Obj): (keyof T)[] {
  return Object.keys(this) as (keyof T)[];
};

Object.prototype.objectValues = function <T>(this: Obj): T[keyof T][] {
  return Object.values(this) as T[keyof T][];
};
