import './object';
import { IterableType } from './type';

export {};

declare global {
  interface Array<T> {
    /**
     * Returns the first element of the array.
     *
     * @returns {T} The first element of the array.
     */
    head(this: T[]): T;

    /**
     * Returns the last element of the array.
     *
     * @returns {T} The last element of the array.
     */
    tail(this: T[]): T;

    /**
     * Returns a new array with all duplicate elements removed based on strict equality.
     *
     * @return {IterableType[]} A new array with only unique elements.
     */
    uniq(this: IterableType[]): IterableType[];

    /**
     * Returns a new array with unique elements based on the specified key.
     * Notice that the last element with the same value will be preserved.
     *
     * @param {keyof T} key - The key to determine uniqueness.
     * @return {T[]} A new array with unique elements based on the specified key.
     */
    uniqBy(this: T[], key: keyof T): T[];

    /**
     * Converts an array of objects into a Map, using a specified key as the map key.
     *
     * @param {keyof T} key - The key to use as the map key.
     * @return {Map<T[keyof T], T>} A Map containing the objects from the array, with the specified key as the map key.
     */
    toMap(this: T[], key: keyof T): Map<T[keyof T], T>;

    /**
     * Groups the elements of an array based on a specified key and returns a Map
     * where the keys are the unique values of the specified key and the values are
     * arrays of elements that have the same key value.
     *
     * @param {keyof T} key - The key to group the elements by.
     * @return {Map<T[keyof T], T[]>} A Map where the keys are the unique values of
     * the specified key and the values are arrays of elements that have the same key
     * value.
     */
    groupBy(this: T[], key: keyof T): Map<T[keyof T], T[]>;
  }
}
Object.defineProperties(Array.prototype, {
  head: {
    value: function <T>(this: T[]): T {
      return this[0];
    },
    enumerable: false,
  },
  tail: {
    value: function <T>(this: T[]): T {
      return this[this.length - 1];
    },
    enumerable: false,
  },
  uniq: {
    value: function <IterableType>(this: IterableType[]): IterableType[] {
      if (this.isEmpty()) {
        return [];
      }
      return [...new Set(this)];
    },
    enumerable: false,
  },
  uniqBy: {
    value: function <T>(this: T[], key: keyof T): T[] {
      if (this.isEmpty()) {
        return [];
      }
      const map = new Map<any, T>();
      this.forEach((item) => {
        const identifier = item[key];
        map.set(identifier, item);
      });
      return Array.from(map.values());
    },
    enumerable: false,
  },
  toMap: {
    value: function <T>(this: T[], key: keyof T): Map<T[keyof T], T> {
      return this.reduce((acc, item) => {
        acc.set(item[key], item);
        return acc;
      }, new Map<T[keyof T], T>());
    },
    enumerable: false,
  },
  groupBy: {
    value: function <T>(this: T[], key: keyof T): Map<T[keyof T], T[]> {
      return this.reduce((acc, item) => {
        if (item[key]?.isNotEmpty() && !acc.has(item[key])) {
          acc.set(item[key], []);
        }
        acc.get(item[key])?.push(item);
        return acc;
      }, new Map<T[keyof T], T[]>());
    },
    enumerable: false,
  },
});
