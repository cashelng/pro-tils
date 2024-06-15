import '../src/object';

describe('Object.isEmpty', () => {
  it('should return true for an empty string', () => {
    expect(''.isEmpty()).toBe(true);
  });

  it('should return true for an empty array', () => {
    expect([].isEmpty()).toBe(true);
  });

  it('should return true for an empty object', () => {
    expect({}.isEmpty()).toBe(true);
  });

  it('should return false for a non-empty string', () => {
    expect('hello'.isEmpty()).toBe(false);
  });

  it('should return false for a non-empty array', () => {
    expect([1, 2, 3].isEmpty()).toBe(false);
  });

  it('should return false for a non-empty object', () => {
    expect({ name: 'Alice', age: 25 }.isEmpty()).toBe(false);
  });
});

describe('Object.isNotEmpty', () => {
  it('should return true for non-empty objects', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj.isNotEmpty()).toBe(true);
  });

  it('should return false for empty objects', () => {
    const obj = {};
    expect(obj.isNotEmpty()).toBe(false);
  });
});

describe('Object.exist', () => {
  it('should return true if the object is not empty and the callback returns true', () => {
    const obj = { name: 'John' };
    const callback = (value: any) => value.name === 'John';
    expect(obj.exist(callback)).toBe(true);
  });

  it('should return true if the object is not empty and no callback is provided', () => {
    const obj = { name: 'John' };
    expect(obj.exist()).toBe(true);
  });

  it('should return false if the object is empty', () => {
    const obj: any = {};
    expect(obj.exist()).toBe(false);
  });

  it('should return the result of the callback if provided', () => {
    const obj = { name: 'John' };
    const callback = (value: any) => value.name.length;
    expect(obj.exist(callback)).toBe(4);
  });

  it('should return false if the callback returns false', () => {
    const obj = { name: 'John' };
    const callback = (value: any) => value.name === 'Jane';
    expect(obj.exist(callback)).toBe(false);
  });
});

describe('Object.merge', () => {
  it('should merge two objects', () => {
    const obj1 = { name: 'John' };
    const obj2 = { age: 30 };
    const mergedObj = obj1.merge(obj2);
    expect(mergedObj).toEqual({ name: 'John', age: 30 });
  });

  it('should merge an object with an empty object', () => {
    const obj1 = { name: 'John' };
    const obj2 = {};
    const mergedObj = obj1.merge(obj2);
    expect(mergedObj).toEqual({ name: 'John' });
  });

  it('should merge an empty object with an object', () => {
    const obj1 = {};
    const obj2 = { age: 30 };
    const mergedObj = obj1.merge(obj2);
    expect(mergedObj).toEqual({ age: 30 });
  });

  it('should merge two objects with overlapping properties', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'Alice', age: 25 };
    const mergedObj = obj1.merge(obj2);
    expect(mergedObj).toEqual({ name: 'Alice', age: 25 });
  });

  it('should return the first object if the second object is null or undefined', () => {
    const obj1 = { name: 'John' };
    let mergedObj = obj1.merge(null);
    expect(mergedObj).toEqual({ name: 'John' });
    mergedObj = obj1.merge(undefined);
    expect(mergedObj).toEqual({ name: 'John' });
  });
});

describe('Object.isNumber', () => {
  it('should return true for a valid number input without a callback', () => {
    expect((5).isNumber()).toBe(true);
  });

  it('should return the correct value when a callback function is provided', () => {
    const callback = (value: number) => value * 2;
    expect((10).isNumber(callback)).toBe(20);
  });

  it('should return false for invalid number inputs', () => {
    expect(('abc' as any).isNumber()).toBe(false);
  });
});

describe('Object.parseInt', () => {
  it('should return 1 of true and 0 of false and 0 of an empty array', () => {
    expect(true.parseInt()).toBe(1);
    expect(false.parseInt()).toBe(0);
    expect([].parseInt()).toBe(0);
  });
  it('should return NaN when called on a non-number value', () => {
    expect('hello'.parseInt()).toBeNaN();
    expect({}.parseInt()).toBeNaN();
  });

  it('should return the parsed integer value when called on a number value', () => {
    expect((123).parseInt()).toBe(123);
    expect((123.456).parseInt()).toBe(123);
    expect(-(123.456).parseInt()).toBe(-123);
  });

  it('should return the parsed integer value when called on a string representation of a number', () => {
    expect('123'.parseInt()).toBe(123);
    expect('123.456'.parseInt()).toBe(123);
    expect('-123.456'.parseInt()).toBe(-123);
  });
});

describe('Object.objectKeys', () => {
  it('should return an empty array for an empty array', () => {
    expect([].objectKeys()).toEqual([]);
  });

  it('should return an empty array for an empty object', () => {
    expect({}.objectKeys()).toEqual([]);
  });

  it('should return an array of keys for a non-empty object', () => {
    expect({ name: 'John', age: 30 }.objectKeys()).toEqual(['name', 'age']);
  });

  it('should return an array of keys for an object with inherited properties', () => {
    class Parent {
      parentProp = 'parent';
    }
    class Child extends Parent {
      childProp = 'child';
    }
    const child = new Child();
    expect(child.objectKeys()).toEqual(['parentProp', 'childProp']);
  });
});

describe('Object.objectValues', () => {
  it('should return an array of values from an object', () => {
    const obj = { a: 1, b: 'two', c: true };
    expect(obj.objectValues()).toEqual([1, 'two', true]);
  });

  it('should return an empty array for an empty object', () => {
    const obj = {};
    expect(obj.objectValues()).toEqual([]);
  });
});
