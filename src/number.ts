export {};

declare global {
  interface Number {
    /**
     * Divides the current number by the given number.
     *
     * @param {number} num - The number to divide by.
     * @return {number} The result of the division.
     */
    divide(this: number, num: number): number;

    /**
     * Multiplies the current number by the given number.
     *
     * @param {number} num - The number to multiply by.
     * @return {number} The result of the multiplication.
     */
    multiply(this: number, num: number): number;

    /**
     * Adds the given number to the current number.
     *
     * @param {number} num - The number to add.
     * @return {number} The sum of the current number and the given number.
     */
    add(this: number, num: number): number;

    /**
     * Subtracts the given number from the current number.
     *
     * @param {number} num - The number to subtract.
     * @return {number} The result of the subtraction.
     */
    subtract(this: number, num: number): number;

    /**
     * Raises the current number to the power of the given number.
     *
     * @param {number} num - The number to raise the current number to.
     * @return {number} The result of the operation.
     */
    pow(this: number, num: number): number;

    /**
     * Rounds the current number to the nearest integer.
     *
     * @return {number} The rounded number.
     */
    round(this: number): number;

    /**
     * Rounds the current number down to the nearest integer.
     *
     * @return {number} The rounded number.
     */
    floor(this: number): number;

    /**
     * Truncates the current number to the nearest integer.
     *
     * @return {number} The truncated number.
     */
    trunc(this: number): number;
  }
}

Object.defineProperties(Number.prototype, {
  divide: {
    value: function (num: number): number {
      return this / num;
    },
    enumerable: false,
  },
  multiply: {
    value: function (num: number): number {
      return this * num;
    },
    enumerable: false,
  },
  add: {
    value: function (num: number): number {
      return this + num;
    },
    enumerable: false,
  },
  subtract: {
    value: function (num: number): number {
      return this - num;
    },
    enumerable: false,
  },
  pow: {
    value: function (num: number): number {
      return Math.pow(this, num);
    },
    enumerable: false,
  },
  round: {
    value: function (): number {
      return Math.round(this);
    },
    enumerable: false,
  },
  floor: {
    value: function (): number {
      return Math.floor(this);
    },
    enumerable: false,
  },
  trunc: {
    value: function (): number {
      return Math.trunc(this);
    },
    enumerable: false,
  },
});
