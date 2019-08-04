# Basic Types 基本类型

在了解 TypeScript 中的数据类型之前，先回顾一下 ECMAScript 中的数据类型。ECMAScript 有两种不同的数据类型：基本类型与引用类型。

在 ES5 中，一共有 5 中基本数据类型，分别为：

- Undefined
- Null
- Boolean
- Number
- String

而引用类型为以下几种：

- Object 类型
- Array 类型
- Date 类型
- RegExp 类型
- Function 类型
- 基本包装类型

在 ES6 中，新增了第 6 个基本类型：Symbol。而在 ES10 中，则新增了第 7 个基本类型：BigInt。

TypeScript 为 ECMAScript 的超集，自然而然囊括了上面的所有类型，并且在此基础上还进行了类型扩展。

下面介绍 TypeScript 的类型

## Undefined 和 Null

在 TypeScript 中，`undefined` 和 `null` 的类型就是 `undefined` 及 `null`。

```ts
let u: undefined = undefined;
let n: null = null;
```

默认情况下 `null` 和 `undefined` 是所有其它类型的子类型，这意味着你能将 `null` 和 `undefined` 赋值给其它类型。

```ts
let foo: number = 2;
foo = null;
foo = undefined;
```

当一个变量定义为 `undefined` 或者 `null` 类型，就意味着无法再给这个变量赋其它值了（如 Number 值），因此在实际使用中，是很少会将一个变量定义为这两种类型的。

```ts
let u: undefined = undefined;
u = null;
u = 2; // Type '2' is not assignable to type 'undefined'.
```

如果使用了 `--strictNullChecks` flag 的时候，`null` 或者 `undefined` 就仅仅只能赋值给 `any` 类型或者它们所对应的类型，这能避免很多普遍的错误。

## Boolean

`boolean` 类型在 TypeScript 中与 ECMAScript 中无异。

```ts
let isDone: boolean = fales;
```

## Number

TypeScript 与 ECMAScript 中的 Number 类型都是浮点数，但是在进制表示上会有一些不一样。

ECMAScript 中，Number 无法直接表示二进制的、仅能表示八进制、十进制、十六进制。而 TypeScript 中，则能表示二进制、八进制、十进制、十六进制的数。另外 ECMAScript 的八进制表示与 TypeScript 也存在差异，ECMAScript 八进制字面值的第一位必须是零(`0`)，而 TypeScript 八进制字面值的开头则为 `0o`。

```js
let decimal = 6;
let hex = 0xf00d;
let octal = 0744
```

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

TypeScript 中的 String 类型与 ECMAScript 相同。

```ts
let color: string = "string"
```

## Object 类型

```ts
let o: object = {
  props: 0
}

o = 1 // Type '1' is not assignable to type 'object'.
```

## Array

`Array` 类型有两种写法，第一种通过元素类型后紧跟 `[]` 表示这个数组中元素的类型：

```ts
let list: number[] = [1, 2, 3];
```

第二种使用的是泛型数组类型来表示：

```ts
let list: Array<number> = [1, 2, 3];
```

## Tuple

`Tuple` 类型用于表示一个已知元素数量以及元素对应数据类型的数组。

```ts
let x: [string, number];
x = ["hello", 10]; // OK
```

数组元素的数量超过 `Tuple` 类型定义的元素数量则会报错：

```ts
let x: [string, number];
x = ["hello", 10, 3]; // ERROR
//Type '[string, number, number]' is not assignable to type '[string, number]'.
//  Types of property 'length' are incompatible.
//    Type '3' is not assignable to type '2'.
```

数组元素的类型与相同位置上 `Tuple` 类型定义的元素类型不同，也会报错：

```ts
let x: [string, number];
x = [10, "hello"]; // ERROR
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
```
