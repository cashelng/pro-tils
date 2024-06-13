export {};

declare global {
  interface Object {
    isNull(this: Object): boolean;
    isUndefined(this: Object): boolean;
    isNil(this: Object): boolean;
    isNilOrEmpty(this: Object): boolean;
    isNotEmpty(this: Object): boolean;

    exist<T, R>(this: T | undefined, callback: (value: T) => R): R | undefined;
    merge<T, R>(this: T, obj: R): T & R;
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

/**
+ * Applies the provided callback to the value and returns the result.
+ * If the value is undefined, returns undefined.
+ *
+ * @param {function} callback - The callback function to apply to the value.
+ * @returns {R | undefined} - The result of the callback function, or undefined if the value is undefined.
+ */
Object.prototype.exist = function <T, R>(
  this: T | undefined,
  callback: (value: T) => R
): R | undefined {
  if (this?.isNotEmpty()) {
    return callback(this);
  }
  return undefined;
};

Object.prototype.merge = function <T, R>(this: T, obj: R): T & R {
  return { ...this, ...obj };
};
