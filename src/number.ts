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
