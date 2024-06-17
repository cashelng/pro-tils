import './object';

export {};

declare global {
  interface String {
    /**
     * Capitalizes the first letter of the string.
     *
     * @return {string} The capitalized string
     */
    capitalize(this: string): string;

    /**
     * Capitalizes the first letter of each word in a sentence.
     *
     * @return {string} The capitalized sentence
     */
    capitalizeSentence(this: string): string;

    /**
     * Checks if the string contains the specified substring.
     *
     * @param {NonNullable<string>} str - The substring to check.
     * @return {boolean} True if the string contains the specified substring, false otherwise.
     */
    contains(this: string, str: NonNullable<string>): boolean;

    /**
     * Checks if the string contains the specified substring, ignoring case.
     *
     * @param {NonNullable<string>} str - The substring to check.
     * @return {boolean} True if the string contains the specified substring, false otherwise.
     */
    containsIgnoreCase(this: string, str: NonNullable<string>): boolean;
  }
}

Object.defineProperties(String.prototype, {
  capitalize: {
    value: function (this: string) {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
  },
  capitalizeSentence: {
    value: function (this: string) {
      return this.trim()
        .split(' ')
        .map((s) => s.capitalize())
        .join(' ');
    },
    enumerable: false,
  },
  contains: {
    value: function (this: string, str: NonNullable<string>) {
      if (this.isEmpty()) {
        return false;
      }
      return this.indexOf(str) !== -1;
    },
    enumerable: false,
  },
  containsIgnoreCase: {
    value: function (this: string, str: NonNullable<string>) {
      if (this.isEmpty()) {
        return false;
      }
      return this.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    },
    enumerable: false,
  },
});
