import '../src/object';

describe('Object Extensions', () => {
  // Example objects for testing
  const obj1 = { name: 'John', age: 30 };
  const obj2 = { city: 'New York' };

  it('should merge two objects correctly', () => {
    const result = obj1.merge(obj2);
    expect(result).toEqual({ name: 'John', age: 30, city: 'New York' });
  });

  it('should correctly check if object is null', () => {
    const result = obj1.isNull();
    expect(result).toBeFalsy();
  });

  it('should correctly check if object is undefined', () => {
    const result = obj1.isUndefined();
    expect(result).toBeFalsy();
  });

  it('should correctly check if object is nil', () => {
    const result = obj1.isNil();
    expect(result).toBeFalsy();
  });

  it('should correctly check if object is not empty', () => {
    const result = obj1.isNotEmpty();
    expect(result).toBeTruthy();
  });

  it('should chain merge operations correctly', () => {
    const result = obj1.merge(obj2).merge({ profession: 'Developer' });
    expect(result).toEqual({ name: 'John', age: 30, city: 'New York', profession: 'Developer' });
  });

  it('should exist operations correctly', () => {
    const result = obj1.exist((it) => it.merge(obj2).merge({ profession: 'Developer' }));
    expect(result).toEqual({ name: 'John', age: 30, city: 'New York', profession: 'Developer' });
  });
});
