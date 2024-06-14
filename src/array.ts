import './object';

export {};

declare global {
  interface Array<T> {
    head(this: T[]): T;
    tail(this: T[]): T;
    uniq(this: T[]): T[];
    associateWith(this: T[], key: keyof T): Map<T[keyof T], T>;
    groupBy(this: T[], key: keyof T): Map<T[keyof T], T[]>;
  }
}

Array.prototype.head = function <T>(this: T[]): T {
  return this[0];
};
Array.prototype.tail = function <T>(this: T[]): T {
  return this[this.length - 1];
};
Array.prototype.uniq = function <T>(this: T[]): T[] {
  if (this.isNilOrEmpty()) {
    return [];
  }
  return [...new Set(this)];
};

Array.prototype.associateWith = function <T>(this: T[], key: keyof T): Map<T[keyof T], T> {
  return this.reduce((acc, item) => {
    acc.set(item[key], item);
    return acc;
  }, new Map<T[keyof T], T>());
};

Array.prototype.groupBy = function <T>(this: T[], key: keyof T): Map<T[keyof T], T[]> {
  return this.reduce((acc, item) => {
    if (!acc.has(item[key])) {
      acc.set(item[key], []);
    }
    acc.get(item[key])?.push(item);
    return acc;
  }, new Map<T[keyof T], T[]>());
};
