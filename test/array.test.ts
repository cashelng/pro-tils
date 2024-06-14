import '../src/array';

describe('Array.head', () => {
  it('should return the first element of an array', () => {
    expect([1, 2, 3].head()).toBe(1);
  });

  it('should return undefined for an empty array', () => {
    expect([].head()).toBeUndefined();
  });

  it('should return the first element of a nested array', () => {
    expect([[1], [2], [3]].head()[0]).toBe(1);
  });
});

describe('Array.tail', () => {
  it('should return the last element of a non-empty array', () => {
    const array = [1, 2, 3];
    expect(array.tail()).toEqual(3);
  });

  it('should return undefined for an empty array', () => {
    const array: number[] = [];
    expect(array.tail()).toBeUndefined();
  });
});

describe('Array.uniq', () => {
  it('should return an empty array for an empty input array', () => {
    const input: number[] = [];
    const result = input.uniq();
    expect(result).toEqual([]);
  });

  it('should return the same array for an input array with all unique elements', () => {
    const input: number[] = [1, 2, 3];
    const result = input.uniq();
    expect(result).toEqual([1, 2, 3]);
  });

  it('should remove duplicate elements from the input array', () => {
    const input: number[] = [1, 2, 2, 3, 3, 3];
    const result = input.uniq();
    expect(result).toEqual([1, 2, 3]);
  });
});

describe('Array.uniqBy', () => {
  it('should return an empty array if the input array is empty', () => {
    const input: any[] = [];
    const key: keyof any = 'name';
    const result = input.uniqBy(key);
    expect(result).toEqual([]);
  });

  it('should return the input array if all elements have unique values based on the key', () => {
    const input: any[] = [{ name: 'John' }, { name: 'Jane' }];
    const key: keyof any = 'name';
    const result = input.uniqBy(key);
    expect(result).toEqual(input);
  });

  it('should return a new array with unique elements based on the key', () => {
    const input: any[] = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 35 },
    ];
    const key: keyof any = 'name';
    const result = input.uniqBy(key);
    expect(result).toEqual([
      { name: 'John', age: 35 },
      { name: 'Jane', age: 25 },
    ]);
  });
});

describe('Array.toMap', () => {
  it('should convert an array to a map based on the specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    const key = 'id';
    const result = input.toMap(key);

    const expectedMap = new Map([
      [1, { id: 1, name: 'Alice' }],
      [2, { id: 2, name: 'Bob' }],
    ]);

    expect(result).toEqual(expectedMap);
  });

  it('should handle converting an empty array to an empty map', () => {
    const input: any[] = [];
    const key = 'id';
    const result = input.toMap(key);

    expect(result.size).toEqual(0);
  });

  it('should handle arrays with duplicate keys by overwriting previous values', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Bob' },
    ];
    const key = 'id';
    const result = input.toMap(key);

    const expectedMap = new Map([[1, { id: 1, name: 'Bob' }]]);

    expect(result).toEqual(expectedMap);
  });

  it('should handle arrays with non-unique keys by using the last encountered value', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Bob' },
    ];
    const key = 'id';
    const result = input.toMap(key);

    const expectedMap = new Map([[1, { id: 1, name: 'Bob' }]]);

    expect(result).toEqual(expectedMap);
  });
});

describe('Array.groupBy', () => {
  it('should group elements by key that exists in all elements', () => {
    const arr = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' },
    ];
    const result = arr.groupBy('id');
    expect(result.size).toBe(2);
    expect(result.get(1)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Charlie' },
    ]);
    expect(result.get(2)).toEqual([{ id: 2, name: 'Bob' }]);
  });

  it('should group elements by key that does not exist in any element', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    const result = arr.groupBy('id' as any);
    expect(result.size).toBe(0);
  });

  it('should group elements by key that exists in some elements but not all', () => {
    const arr = [{ id: 1, name: 'Alice' }, { name: 'Bob' }, { id: 1, name: 'Charlie' }];
    const result = arr.groupBy('id');
    expect(result.size).toBe(1);
    expect(result.get(1)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Charlie' },
    ]);
  });
});
