### A small extensions package which also supported typescript

This package extends global Javascript interfaces with additional utility methods.

**Notes:**

**This will not replace the existing methods, just to create new utility functions attached into prototypes**

Please raise an issue, or submit a pull request yourself if you see any overlap.

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

### `number.trunc()`

```typescript
console.log((10.5).trunc()); // 10
console.log((-10.5).trunc()); // -10
console.log((0).trunc()); // 0
console.log((10.9999).trunc()); // 10
console.log((10.999999999999999).trunc()); // 10
```

## Array

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
const input1: User[] = [];
const key1: keyof User = 'name';
console.log(input1.uniqBy(key1)); // []

const input2: User[] = [{ name: 'John' }, { name: 'Jane' }];
const key2: keyof any = 'name';
console.log(input2.uniqBy(key2)); // [{ name: 'John' }, { name: 'Jane' }]

const input3: User[] = [
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

## Object

#### In javascript, Object type represents all other valid data types, these following method will support all others

### `Object.isEmpty()`

```typescript
const emptyString = '';
console.log(emptyString.isEmpty()); // console.log(true)

const emptyArray = [];
console.log(emptyArray.isEmpty()); // console.log(true)

const emptyObject = {};
console.log(emptyObject.isEmpty()); // console.log(true)

const nonEmptyString = 'hello';
console.log(nonEmptyString.isEmpty()); // console.log(false)

const nonEmptyArray = [1, 2, 3];
console.log(nonEmptyArray.isEmpty()); // console.log(false)

const nonEmptyObject = { name: 'Alice', age: 25 };
console.log(nonEmptyObject.isEmpty()); // console.log(false)
```

### `Object.isNotEmpty()`

```typescript
const nonEmptyObj = { name: 'John', age: 30 };
console.log(nonEmptyObj.isNotEmpty()); // console.log(true)

const emptyObj = {};
console.log(emptyObj.isNotEmpty()); // console.log(false)
```

### `Object.exist()`

```typescript
const objExists: User = { name: 'John' };
const callbackExists = (value: User) => value.name === 'John';
console.log(objExists.exist(callbackExists)); // console.log(true)

const objExistsNoCallback = { name: 'John' };
console.log(objExistsNoCallback.exist()); // console.log(true)

const objEmpty = {};
console.log(objEmpty.exist()); // console.log(false)

const objCallbackResult: User = { name: 'John' };
const callbackLength = (value: User) => value.name.length;
console.log(objCallbackResult.exist(callbackLength)); // console.log(4)

const objCallbackFalse: User = { name: 'John' };
const callbackFalse = (value: User) => value.name === 'Jane';
console.log(objCallbackFalse.exist(callbackFalse)); // console.log(false)
```

### `Object.merge()`

```typescript
const obj1Merge = { name: 'John' };
const obj2Merge = { age: 30 };
const mergedObj = obj1Merge.merge(obj2Merge);
console.log(mergedObj); // console.log({ name: 'John', age: 30 })

const obj1EmptyMerge = { name: 'John' };
const obj2EmptyMerge = {};
const mergedObjEmpty = obj1EmptyMerge.merge(obj2EmptyMerge);
console.log(mergedObjEmpty); // console.log({ name: 'John' })

const obj1EmptyObjMerge = {};
const obj2NotEmptyMerge = { age: 30 };
const mergedObjNotEmpty = obj1EmptyObjMerge.merge(obj2NotEmptyMerge);
console.log(mergedObjNotEmpty); // console.log({ age: 30 })

const obj1OverlapMerge = { name: 'John', age: 30 };
const obj2OverlapMerge = { name: 'Alice', age: 25 };
const mergedObjOverlap = obj1OverlapMerge.merge(obj2OverlapMerge);
console.log(mergedObjOverlap); // console.log({ name: 'Alice', age: 25 })

const obj1NullMerge = { name: 'John' };
let mergedObjNull = obj1NullMerge.merge(null);
console.log(mergedObjNull); // console.log({ name: 'John' })
mergedObjNull = obj1NullMerge.merge(undefined);
console.log(mergedObjNull); // console.log({ name: 'John' })

const obj1MergeEmptyRecord = { name: 'John' };
const obj2MergeEmptyRecord: Record<string, any> = {};
const mergedObjEmptyRecord = obj1MergeEmptyRecord.merge(obj2MergeEmptyRecord);
console.log(mergedObjEmptyRecord); // console.log({ name: 'John' })

const obj1MergeNonEmptyRecord: Record<string, any> = { key1: 'value1' };
const obj2MergeNonEmpty = { key2: 'value2' };
const mergedObjNonEmptyRecord = obj1MergeNonEmptyRecord.merge(obj2MergeNonEmpty);
console.log(mergedObjNonEmptyRecord); // console.log({ key1: 'value1', key2: 'value2' })
```

### `Object.isNumber()`

```typescript
const validNumber = 5;
console.log(validNumber.isNumber()); // console.log(true)

const callbackNumber = (value: number) => value * 2;
console.log((10).isNumber(callbackNumber)); // console.log(20)

const invalidNumber = 'abc' as any;
console.log(invalidNumber.isNumber()); // console.log(false)

const nonEmptyObjIsNumber = { key: 'value' };
console.log(nonEmptyObjIsNumber.isNumber()); // console.log(false)
```

### `Object.parseInt()`

```typescript
const boolTrueParse = true;
console.log(boolTrueParse.parseInt()); // console.log(1)

const boolFalseParse = false;
console.log(boolFalseParse.parseInt()); // console.log(0)

const emptyArrayParse = [];
console.log(emptyArrayParse.parseInt()); // console.log(0)

const nonNumberParse = 'hello';
console.log(nonNumberParse.parseInt()); // console.log(NaN)

const emptyRecordParse: Record<string, any> = {};
console.log(emptyRecordParse.parseInt()); // console.log(NaN)

const nonEmptyRecordParse = { key: 'value' };
console.log(nonEmptyRecordParse.parseInt()); // console.log(NaN)

const numberValueParse = 123;
console.log(numberValueParse.parseInt()); // console.log(123)

const numberFloatParse = 123.456;
console.log(numberFloatParse.parseInt()); // console.log(123)

const negativeNumberFloatParse = -123.456;
console.log(negativeNumberFloatParse.parseInt()); // console.log(-123)

const stringNumberParse = '123';
console.log(stringNumberParse.parseInt()); // console.log(123)

const stringFloatParse = '123.456';
console.log(stringFloatParse.parseInt()); // console.log(123)

const stringNegativeFloatParse = '-123.456';
console.log(stringNegativeFloatParse.parseInt()); // console.log(-123)
```

#### From here, these will only support key-value pairs

### `Object.objectKeys()`

```typescript
const emptyArrayKeys = [];
console.log(emptyArrayKeys.objectKeys()); // console.log([])

const emptyObjectKeys = {};
console.log(emptyObjectKeys.objectKeys()); // console.log([])

const nonEmptyObjectKeys = { name: 'John', age: 30 };
console.log(nonEmptyObjectKeys.objectKeys()); // console.log(['name', 'age'])

class Parent {
  parentProp = 'parent';
}
class Child extends Parent {
  childProp = 'child';
}
const childObj = new Child();
console.log(childObj.objectKeys()); // console.log(['parentProp', 'childProp'])

const nonEmptyRecordKeys: Record<string, any> = { key1: 'value1', key2: 'value2' };
console.log(nonEmptyRecordKeys.objectKeys()); // console.log(['key1', 'key2'])
```

### `Object.objectValues()`

```typescript
const objValues = { a: 1, b: 'two', c: true };
console.log(objValues.objectValues()); // console.log([1, 'two', true])

const emptyObjValues = {};
console.log(emptyObjValues.objectValues()); // console.log([])
```

## String

### `String.capitalize()`

```typescript
const emptyStringCapitalize = '';
console.log(emptyStringCapitalize.capitalize()); // console.log('')

const singleLowercaseCapitalize = 'a';
console.log(singleLowercaseCapitalize.capitalize()); // console.log('A')

const singleUppercaseCapitalize = 'A';
console.log(singleUppercaseCapitalize.capitalize()); // console.log('A')

const lowercaseWordCapitalize = 'hello';
console.log(lowercaseWordCapitalize.capitalize()); // console.log('Hello')

const uppercaseFirstCapitalize = 'Hello';
console.log(uppercaseFirstCapitalize.capitalize()); // console.log('Hello')
```

### `String.capitalizeSentence()`

```typescript
const sentenceCapitalize = 'hello world';
console.log(sentenceCapitalize.capitalizeSentence()); // console.log('Hello World')

console.log('this is a test'.capitalizeSentence()); // console.log('This Is A Test')

console.log('123 abc'.capitalizeSentence()); // console.log('123 Abc')

console.log(''.capitalizeSentence()); // console.log('')

console.log(' '.capitalizeSentence()); // console.log('')
```

### `String.contains()`

```typescript
const emptyStringContains = '';
console.log(emptyStringContains.contains('')); // console.log(false)

const noSubstringContains = 'hello';
console.log(noSubstringContains.contains('world')); // console.log(false)

const substringContains = 'hello world';
console.log(substringContains.contains('world')); // console.log(true)

const caseSensitiveContains = 'hello World';
console.log(caseSensitiveContains.contains('world')); // console.log(false)
```

### `String.containsIgnoreCase()`

```typescript
const substringIgnoreCase = 'Hello World';
console.log(substringIgnoreCase.containsIgnoreCase('hello')); // console.log(true)

console.log(substringIgnoreCase.containsIgnoreCase('world')); // console.log(true)

const noSubstringIgnoreCase = 'Hello World';
console.log(noSubstringIgnoreCase.containsIgnoreCase('foo')); // console.log(false)

console.log(noSubstringIgnoreCase.containsIgnoreCase('HELO')); // console.log(false)

const emptyStringIgnoreCase = '';
console.log(emptyStringIgnoreCase.containsIgnoreCase('foo')); // console.log(false)
```

## More on the way ^^
