export {};

type NonNullableString = NonNullable<string>;

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

  interface Number {
    divide(this: number, num: number): number;
    multiply(this: number, num: number): number;
    add(this: number, num: number): number;
    subtract(this: number, num: number): number;
    round(this: number): number;
    isNumber(this: number): boolean;
  }
}
