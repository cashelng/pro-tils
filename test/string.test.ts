import '../src/string';

describe('String', () => {
  // Example string for testing
  const str = 'hello world';

  it('should capitalize a string correctly', () => {
    const result = str.capitalize();
    expect(result).toEqual('Hello world');
  });

  it('should capitalize a sentence correctly', () => {
    const result = str.capitalizeSentence();
    expect(result).toEqual('Hello World');
  });

  it('should correctly check if string starts with a substring', () => {
    const result = str.startsWith('hello');
    expect(result).toBeTruthy();
  });

  it('should correctly check if string ends with a substring', () => {
    const result = str.endsWith('world');
    expect(result).toBeTruthy();
  });

  it('should correctly check if string contains a substring', () => {
    const result = str.contains('lo');
    expect(result).toBeTruthy();
  });

  it('should correctly check if string contains a substring (case insensitive)', () => {
    const result = str.containsIgnoreCase('WoRlD');
    expect(result).toBeTruthy();
  });

  it('should parse a string to an integer correctly', () => {
    const result = '123'.parseInt();
    expect(result).toEqual(123);
  });

  it('should parse a string to a float correctly', () => {
    const result = '3.14'.parseFloat();
    expect(result).toEqual(3.14);
  });

  it('should chain capitalizeSentence and startsWith correctly', () => {
    const capitalizedSentence = str.capitalizeSentence().startsWith('Hello');
    expect(capitalizedSentence).toBeTruthy();
  });
});
