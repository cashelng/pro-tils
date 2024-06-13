import './object';

export {};

type NonNullableString = NonNullable<string>;

declare global {
  interface String {
    parseInt(this: string): number;
    parseFloat(this: string): number;
    capitalize(this: string): string;
    capitalizeSentence(this: string): string;
    startsWith(this: string, str: NonNullableString): boolean;
    endsWith(this: string, str: NonNullableString): boolean;
    contains(this: string, str: NonNullableString): boolean;
    containsIgnoreCase(this: string, str: NonNullableString): boolean;
  }
}

String.prototype.parseInt = function (this: string) {
  return parseInt(this);
};

String.prototype.parseFloat = function (this: string) {
  return parseFloat(this);
};

String.prototype.capitalize = function (this: string) {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalizeSentence = function (this: string) {
  return this.trim()
    .split(' ')
    .map((s) => s.capitalize())
    .join(' ');
};

String.prototype.startsWith = function (this: string, str: NonNullable<string>) {
  if (this.isNilOrEmpty()) {
    return false;
  }
  return this.slice(0, str.length) === str;
};

String.prototype.endsWith = function (this: string, str: NonNullable<string>) {
  if (this.isNilOrEmpty()) {
    return false;
  }
  return this.slice(this.length - str.length) == str;
};

String.prototype.contains = function (this: string, str: NonNullable<string>) {
  if (this.isNilOrEmpty()) {
    return false;
  }
  return this.indexOf(str) !== -1;
};

String.prototype.containsIgnoreCase = function (this: string, str: NonNullable<string>) {
  if (this.isNilOrEmpty()) {
    return false;
  }
  return this.toLowerCase().indexOf(str.toLowerCase()) !== -1;
};
