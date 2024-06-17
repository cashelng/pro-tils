export type IterableType = number | string | symbol;

export interface Obj extends Record<string, any> {}

export type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? // @ts-ignore
      `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ''
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

export type DeepValue<T, KS extends string[]> = KS extends []
  ? T
  : KS extends [infer K, ...infer Rest]
  ? K extends keyof T
    ? DeepValue<T[K], Extract<Rest, string[]>>
    : never
  : never;
