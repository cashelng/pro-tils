export {};

declare global {
  interface Object {
    /**
     * Checks if the object is null.
     *
     * @return {boolean} True if the object is null, false otherwise.
     */
    isNull(this: Object): boolean;

    /**
     * Checks if the object is undefined.
     *
     * @return {boolean} True if the object is undefined, false otherwise.
     */
    isUndefined(this: Object): boolean;

    /**
     * Checks if the object is null or undefined.
     *
     * @return {boolean} True if the object is null or undefined, false otherwise.
     */
    isNil(this: Object): boolean;

    /**
     * Checks if the object is null, undefined, empty string, or an empty array or object.
     *
     * @return {boolean} True if the object is null, undefined, empty string, or an empty array or object, false otherwise.
     */
    isNilOrEmpty(this: Object): boolean;

    /**
     * Checks if the object is not empty.
     *
     * @return {boolean} True if the object is not empty, false otherwise.
     */
    isNotEmpty(this: Object): boolean;

    /**
     * Checks if the object exists and is not empty. If a callback function is provided, it is called with the object as an argument and the return value is returned. Otherwise, true is returned.
     *
     * @param {((value: T) => R) | undefined} callback - An optional callback function to be called with the object as an argument.
     * @return {R | boolean} The return value of the callback function if provided, or true if the object exists and is not empty, or false otherwise.
     */
    exist<T, R>(this: T | undefined, callback?: (value: T) => R): R | boolean;

    /**
     * Merges two objects into a single object.
     *
     * @param {R} obj - The object to merge into the first object.
     * @return {T & R} - The merged object.
     */
    merge<T, R>(this: T, obj: R): T & R;

    /**
     * Checks if the object is a number. If a callback function is provided, it is called with the number value as an argument and the return value is returned. Otherwise, true is returned if the object is a number and not NaN, false otherwise.
     *
     * @param {((value: number) => R) | undefined} callback - An optional callback function to be called with the number value as an argument.
     * @return {R | boolean} The return value of the callback function if provided, or true if the object is a number and not NaN, false otherwise.
     */
    isNumber<T, R>(this: T, callback?: (value: number) => R): R | boolean;
  }
}

Object.prototype.isNull = function (this: Object): boolean {
  return this === null;
};

Object.prototype.isUndefined = function (this: Object): boolean {
  return this === undefined;
};

Object.prototype.isNil = function (this: Object): boolean {
  return this.isUndefined() || this.isNull();
};

Object.prototype.isNilOrEmpty = function (this: Object): boolean {
  switch (true) {
    case this.isNil():
    case this === '':
    case Array.isArray(this) && this.length === 0:
    case typeof this === 'object' && Object.keys(this).length === 0:
      return true;
    default:
      return false;
  }
};

Object.prototype.isNotEmpty = function (this: Object): boolean {
  return !this.isNilOrEmpty();
};

Object.prototype.exist = function <T, R>(
  this: T | undefined,
  callback?: (value: T) => R
): R | boolean {
  if (this?.isNotEmpty()) {
    if (callback) {
      return callback(this);
    }
    return true;
  }
  return false;
};

Object.prototype.merge = function <T, R>(this: T, obj: R): T & R {
  return { ...this, ...obj };
};

Object.prototype.isNumber = function <T, R>(this: T, callback?: (value: number) => R): R | boolean {
  const number = Number(this);
  if (isNaN(number) || this?.isNilOrEmpty()) {
    return false;
  }
  if (callback) {
    return callback(number);
  }
  return true;
};
