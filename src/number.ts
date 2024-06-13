export {};

declare global {
  interface Number {
    divide(this: number, num: number): number;
    multiply(this: number, num: number): number;
    add(this: number, num: number): number;
    subtract(this: number, num: number): number;
    round(this: number): number;
    isNumber(this: number): boolean;
  }
}

Number.prototype.divide = function (num: number): number {
  return this / num;
};
Number.prototype.multiply = function (num: number): number {
  return this * num;
};
Number.prototype.add = function (num: number): number {
  return this + num;
};
Number.prototype.subtract = function (num: number): number {
  return this - num;
};
Number.prototype.round = function (): number {
  return Math.round(this);
};
Number.prototype.isNumber = function (): boolean {
  return !isNaN(this);
};
