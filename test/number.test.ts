import '../src/number';

describe('Number', () => {
  it('should add numbers correctly', () => {
    const num = 10;
    const result = num.add(5);
    expect(result).toBe(15);
  });

  it('should subtract numbers correctly', () => {
    const num = 10;
    const result = num.subtract(3);
    expect(result).toBe(7);
  });

  it('should multiply numbers correctly', () => {
    const num = 5;
    const result = num.multiply(2);
    expect(result).toBe(10);
  });

  it('should divide numbers correctly', () => {
    const num = 10;
    const result = num.divide(2);
    expect(result).toBe(5);
  });

  it('should round numbers correctly', () => {
    const num = 3.14;
    const result = num.round();
    expect(result).toBe(3);
  });

  it('should check if a number is a number correctly', () => {
    const num = 10;
    const result = num.isNumber();
    expect(result).toBe(true);
  });

  it('should allow chaining of number methods correctly', () => {
    const num = 10;
    const result = num.add(5).subtract(3).multiply(2).divide(2).round();
    expect(result).toBe(12);
  });
});
