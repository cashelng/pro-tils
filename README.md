# pro-tils: TypeScript Extensions Package

This package extends global TypeScript interfaces with additional utility methods.

## Installation

via npm:

```bash
npm  install  @cashelng/pro-tils
```

via yarn:

```bash
yarn  add  @cashelng/pro-tils
```

## Usage

Import the package at the top of your TypeScript files to extend global interfaces:

```typescript
// App.tsx
import 'your-package-name';
```

### Number

```typescript
// Example usage of Number extensions
const num: number = 10;

console.log(num.add(5)); // Output: 15
console.log(num.subtract(3)); // Output: 7
console.log(num.multiply(2)); // Output: 20
console.log(num.divide(2)); // Output: 5
console.log(num.round()); // Output: 10
console.log(num.isNumber()); // Output: true

// Chaining use
const result = num.add(5).subtract(3).multiply(2).divide(2).round();
console.log(result); // Output: 10
```

### Object

```typescript
// Example usage of Object extensions
const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York' };

console.log(obj1.merge(obj2)); // Output: { name: 'John', age: 30, city: 'New York' }
console.log(obj1.isNull()); // Output: false
console.log(obj1.isUndefined()); // Output: false
console.log(obj1.isNil()); // Output: false
console.log(obj1.isNotEmpty()); // Output: true

// Chaining use
const mergedObject = obj1.merge(obj2).merge({ profession: 'Developer' });
console.log(mergedObject); // Output: { name: 'John', age: 30, city: 'New York', profession: 'Developer' }
```

### String

```typescript
// Example usage of String extensions
const str = 'hello world';

console.log(str.capitalize()); // Output: 'Hello world'
console.log(str.capitalizeSentence()); // Output: 'Hello world'
console.log(str.startsWith('hello')); // Output: true
console.log(str.endsWith('world')); // Output: true
console.log(str.contains('lo')); // Output: true
console.log(str.containsIgnoreCase('WoRlD')); // Output: true
console.log('123'.parseInt()); // Output: 123
console.log('3.14'.parseFloat()); // Output: 3.14

// Chaining use
const capitalizedSentence = str.capitalizeSentence().startsWith('Hello');
console.log(capitalizedSentence); // Output: true
```

## Contributing

Contributions are welcome! Please feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is licensed under the MIT License
