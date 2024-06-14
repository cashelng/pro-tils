import '../src/number';
import '../src/object';

describe('Number.divide', () => {
  it('should divide a positive number by another positive number', () => {
    const num = 10;
    const result = num.divide(2);
    expect(result).toBe(5);
  });

  it('should divide a negative number by a positive number', () => {
    const num = -10;
    const result = num.divide(2);
    expect(result).toBe(-5);
  });

  it('should handle dividing a positive number by zero', () => {
    const num = 10;
    const result = num.divide(0);
    expect(result).toBe(Infinity);
  });

  it('should divide zero by a positive number', () => {
    const num = 0;
    const result = num.divide(5);
    expect(result).toBe(0);
  });
});

describe('Number.multiply', () => {
  it('should multiply a positive number by another positive number', () => {
    const num = 5;
    const result = num.multiply(2);
    expect(result).toBe(10);
  });

  it('should multiply a negative number by another positive number', () => {
    const num = -5;
    const result = num.multiply(2);
    expect(result).toBe(-10);
  });

  it('should multiply a positive number by a negative number', () => {
    const num = 5;
    const result = num.multiply(-2);
    expect(result).toBe(-10);
  });

  it('should multiply a negative number by another negative number', () => {
    const num = -5;
    const result = num.multiply(-2);
    expect(result).toBe(10);
  });

  it('should multiply zero by any number', () => {
    const num = 0;
    const result = num.multiply(2);
    expect(result).toBe(0);
  });

  it('should multiply any number by zero', () => {
    const num = 5;
    const result = num.multiply(0);
    expect(result).toBe(0);
  });
});

describe('Number.add', () => {
  it('should add two positive numbers', () => {
    const num1 = 5;
    const num2 = 10;
    const result = num1.add(num2);
    expect(result).toBe(15);
  });

  it('should add a positive number and a negative number', () => {
    const num1 = 5;
    const num2 = -3;
    const result = num1.add(num2);
    expect(result).toBe(2);
  });

  it('should add two negative numbers', () => {
    const num1 = -5;
    const num2 = -3;
    const result = num1.add(num2);
    expect(result).toBe(-8);
  });

  it('should add zero to a number', () => {
    const num = 5;
    const result = num.add(0);
    expect(result).toBe(5);
  });
});

describe('Number.subtract', () => {
  it('should subtract a positive number from another positive number', () => {
    const num1 = 5;
    const num2 = 3;
    const result = num1.subtract(num2);
    expect(result).toBe(2);
  });

  it('should subtract a negative number from a positive number', () => {
    const num1 = 5;
    const num2 = -3;
    const result = num1.subtract(num2);
    expect(result).toBe(8);
  });

  it('should subtract a positive number from a negative number', () => {
    const num1 = -5;
    const num2 = 3;
    const result = num1.subtract(num2);
    expect(result).toBe(-8);
  });

  it('should subtract a negative number from another negative number', () => {
    const num1 = -5;
    const num2 = -3;
    const result = num1.subtract(num2);
    expect(result).toBe(-2);
  });

  it('should subtract zero from a number', () => {
    const num = 5;
    const result = num.subtract(0);
    expect(result).toBe(5);
  });
});

describe('Number.pow', () => {
  it('should calculate the power of a positive number correctly', () => {
    const num = 2;
    const power = 3;
    const result = num.pow(power);
    expect(result).toBe(8);
  });

  it('should calculate the power of a negative number correctly', () => {
    const num = -2;
    const power = 3;
    const result = num.pow(power);
    expect(result).toBe(-8);
  });

  it('should calculate the power of zero correctly', () => {
    const num = 0;
    const power = 3;
    const result = num.pow(power);
    expect(result).toBe(0);
  });
});

describe('Number.round', () => {
  it('should round a positive number to the nearest whole number', () => {
    expect((10.5).round()).toBe(11);
    expect((-10.5).round()).toBe(-10);
  });

  it('should round a negative number to the nearest whole number', () => {
    expect((-10.5).round()).toBe(-10);
    expect((10.5).round()).toBe(11);
  });

  it('should round a decimal number to the nearest whole number', () => {
    expect((10.499).round()).toBe(10);
    expect((10.501).round()).toBe(11);
  });

  it('should round a large number to the nearest whole number', () => {
    expect((100000000.45).round()).toBe(100000000);
    expect((100000000.6).round()).toBe(100000001);
  });

  it('should return 0 for 0', () => {
    expect((0).round()).toBe(0);
  });
});

describe('Number.floor', () => {
  it('should floor a positive number to the nearest integer', () => {
    const num = 10.5;
    const result = num.floor();
    expect(result).toBe(10);
  });

  it('should floor a negative number to the nearest integer', () => {
    const num = -10.5;
    const result = num.floor();
    expect(result).toBe(-11);
  });

  it('should floor a decimal number to the nearest integer', () => {
    const num = 10.1;
    const result = num.floor();
    expect(result).toBe(10);
  });

  it('should floor zero to zero', () => {
    const num = 0;
    const result = num.floor();
    expect(result).toBe(0);
  });
});
