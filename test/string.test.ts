import '../src/string';

describe('String.capitalize', () => {
  it('should capitalize an empty string', () => {
    expect(''.capitalize()).toEqual('');
  });

  it('should capitalize a single lowercase character', () => {
    expect('a'.capitalize()).toEqual('A');
  });

  it('should capitalize a single uppercase character', () => {
    expect('A'.capitalize()).toEqual('A');
  });

  it('should capitalize a word with all lowercase characters', () => {
    expect('hello'.capitalize()).toEqual('Hello');
  });

  it('should capitalize a word with the first letter as uppercase and the rest lowercase', () => {
    expect('Hello'.capitalize()).toEqual('Hello');
  });
});

describe('String.capitalizeSentence', () => {
  it('should capitalize the first letter of each word in a sentence', () => {
    expect('hello world'.capitalizeSentence()).toBe('Hello World');
    expect('this is a test'.capitalizeSentence()).toBe('This Is A Test');
    expect('123 abc'.capitalizeSentence()).toBe('123 Abc');
  });

  it('should handle empty strings', () => {
    expect(''.capitalizeSentence()).toBe('');
    expect(' '.capitalizeSentence()).toBe('');
  });

  it('should handle sentences with special characters', () => {
    expect('Hello! World?'.capitalizeSentence()).toBe('Hello! World?');
    expect('Hello, World!'.capitalizeSentence()).toBe('Hello, World!');
    expect('Hello? World!'.capitalizeSentence()).toBe('Hello? World!');
  });
});

describe('String.contains', () => {
  it('should return false for an empty string', () => {
    expect(''.contains('')).toBe(false);
  });

  it('should return false if the string does not contain the substring', () => {
    expect('hello'.contains('world')).toBe(false);
  });

  it('should return true if the string contains the substring', () => {
    expect('hello world'.contains('world')).toBe(true);
  });

  it('should be case-sensitive', () => {
    expect('hello World'.contains('world')).toBe(false);
  });
});

describe('String.containsIgnoreCase', () => {
  it('should return true when the string contains the substring', () => {
    expect('Hello World'.containsIgnoreCase('hello')).toBe(true);
    expect('Hello World'.containsIgnoreCase('world')).toBe(true);
  });

  it('should return false when the string does not contain the substring', () => {
    expect('Hello World'.containsIgnoreCase('foo')).toBe(false);
    expect('Hello World'.containsIgnoreCase('HELO')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(''.containsIgnoreCase('foo')).toBe(false);
  });
});
