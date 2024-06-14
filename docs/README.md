# Installation

via npm:

```bash
npm install @cashelng/pro-tils
```

via yarn:

```bash
yarn add @cashelng/pro-tils
```

# Usage

Import the package at the top of your TypeScript files to extend global interfaces:

```typescript
// index.ts
import '@cashelng/pro-tils';
```

## Number

<details>
<summary>All supported functions</summary>

### `number.add()`

```typescript
const num2 = 5;
const num3 = 10;
console.log(num2.add(num3)); // 15

const num4 = 5;
const num5 = -3;
console.log(num4.add(num5)); // 2

const num6 = -5;
const num7 = -3;
console.log(num6.add(num7)); // -8

const num8 = 5;
console.log(num8.add(0)); // 5
```

### `number.subtract()`

```typescript
const num1 = 5;
const num2 = 3;
console.log(num1.subtract(num2)); // 2

const num3 = 5;
const num4 = -3;
console.log(num3.subtract(num4)); // 8

const num5 = -5;
const num6 = 3;
console.log(num5.subtract(num6)); // -8

const num7 = -5;
const num8 = -3;
console.log(num7.subtract(num8)); // -2

const num9 = 5;
console.log(num9.subtract(0)); // 5
```

### `number.multiply()`

```typescript
const num1 = 5;
console.log(num1.multiply(2)); // 10

const num2 = -5;
console.log(num2.multiply(2)); // -10

const num3 = 5;
console.log(num3.multiply(-2)); // -10

const num4 = -5;
console.log(num4.multiply(-2)); // 10

const num5 = 0;
console.log(num5.multiply(2)); // 0

const num6 = 5;
console.log(num6.multiply(0)); // 0
```

### `number.divide()`

```typescript
const num1 = 10;
console.log(num1.divide(2)); // 5

const num2 = -10;
console.log(num2.divide(2)); // -5

const num3 = 10;
console.log(num3.divide(0)); // Infinity

const num4 = 0;
console.log(num4.divide(5)); // 0
```

### `number.pow()`

```typescript
const num1 = 2;
const power1 = 3;
console.log(num1.pow(power1)); // 8

const num2 = -2;
const power2 = 3;
console.log(num2.pow(power2)); // -8

const num3 = 0;
const power3 = 3;
console.log(num3.pow(power3)); // 0
```

### `number.round()`

```typescript
console.log((10.5).round()); // 11
console.log((-10.5).round()); // -10

console.log((10.499).round()); // 10
console.log((10.501).round()); // 11

console.log((100000000.45).round()); // 100000000
console.log((100000000.6).round()); // 100000001

console.log((0).round()); // 0
```

### `number.floor()`

```typescript
const num1 = 10.5;
console.log(num1.floor()); // 10

const num2 = -10.5;
console.log(num2.floor()); // -11

const num3 = 10.1;
console.log(num3.floor()); // 10

const num4 = 0;
console.log(num4.floor()); // 0
```

</details>

## Array

<details>
<summary>All supported functions</summary>

### `Array.head()`

```typescript
console.log([1, 2, 3].head()); // 1
console.log([].head()); // undefined
console.log([[1], [2], [3]].head()[0]); // 1
```

### `Array.tail()`

```typescript
console.log([1, 2, 3].tail()); // 3
console.log([].tail()); // undefined
```

### `Array.uniq()`

```typescript
console.log([].uniq()); // []
console.log([1, 2, 3].uniq()); // [1, 2, 3]
console.log([1, 2, 2, 3, 3, 3].uniq()); // [1, 2, 3]
```

### `Array.uniqBy()`

Notice that the last element with the same value will be preserved.

```typescript
const input1: any[] = [];
const key1: keyof any = 'name';
console.log(input1.uniqBy(key1)); // []

const input2: any[] = [{ name: 'John' }, { name: 'Jane' }];
const key2: keyof any = 'name';
console.log(input2.uniqBy(key2)); // [{ name: 'John' }, { name: 'Jane' }]

const input3: any[] = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'John', age: 35 },
];
const key3: keyof any = 'name';
console.log(input3.uniqBy(key3)); // [{ name: 'John', age: 35 }, { name: 'Jane', age: 25 }]
```

### `Array.toMap()`

```typescript
const input1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const key1 = 'id';
console.log(input1.toMap(key1)); // Map { 1 => { id: 1, name: 'Alice' }, 2 => { id: 2, name: 'Bob' } }

const input2: any[] = [];
const key2 = 'id';
console.log(input2.toMap(key2)); // Map {}

const input3 = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Bob' },
];
const key3 = 'id';
console.log(input3.toMap(key3)); // Map { 1 => { id: 1, name: 'Bob' } }
```

### `Array.groupBy()`

```typescript
const arr1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' },
];
console.log(arr1.groupBy('id')); // Map { 1 => [{ id: 1, name: 'Alice' }, { id: 1, name: 'Charlie' }], 2 => [{ id: 2, name: 'Bob' }] }

const arr2 = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
console.log(arr2.groupBy('id' as any)); // Map {}

const arr3 = [{ id: 1, name: 'Alice' }, { name: 'Bob' }, { id: 1, name: 'Charlie' }];
console.log(arr3.groupBy('id')); // Map { 1 => [{ id: 1, name: 'Alice' }, { id: 1, name: 'Charlie' }] }
```

</details>

## Object

<details>
<summary>All supported functions</summary>
</details>

## String

<details>
<summary>All supported functions</summary>
</details>

## More on the way ^^
