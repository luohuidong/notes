# Basic Types 基本类型一

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
- Function 类型

在 ES6 中，新增了第 6 个基本类型：Symbol。

TypeScript 为 ECMAScript 的超集，自然而然囊括了上面的所有类型，并且在此基础上还进行了类型扩展，例如 `void`、`any`、`never`、元组、枚举、高级类型等等。

## 类型注解

在介绍 TypeScript 的数据类型之前，了解一下“类型注解”这个概念，它相当于强类型语言中的类型声明，对变量起到一个约束的作用。其形式为 `(变量/函数):type`。

## 与 ES6 对应的基础类型

### Undefined 和 Null

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

### Boolean

`boolean` 类型在 TypeScript 中与 ECMAScript 中无异。

```ts
let isDone: boolean = fales;
```

### Number

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

### String

TypeScript 中的 String 类型与 ECMAScript 相同。

```ts
let color: string = "string"
```

## 与 ES6 对应的引用类型

### Object 类型

```ts
let o: object = {
  props: 0
}

o = 1 // Type '1' is not assignable to type 'object'.
```

### Array

`Array` 类型有两种写法，第一种通过元素类型后紧跟 `[]` 表示这个数组中元素的类型：

```ts
let list: number[] = [1, 2, 3];
```

第二种使用的是泛型数组类型来表示：

```ts
let list: Array<number> = [1, 2, 3];
```

如果数组元素有多种类型，那么可以使用联合类型来定义：

```ts
let list: Array<number | string> = [1, 2, 3, '4'];
```

上面的例子中表示数组中的元素即可以是 `number` 类型，也可以是 `string` 类型。

### Function

在声明函数的时候，需要给函数的参数指定类型，此时函数的返回值类型可以省略，因此 ts 会自动推断返回类型：

```ts
let add = (x: number, y: number) => x + y
```

声明函数类型还可以通过下面的形式来定义：

```ts
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;
```

## TS 扩展的类型

### Tuple

`Tuple` 类型，是一种特殊的数组。它用于限定一个数组的元素数量以及相应位置的元素数据类型。

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

虽说 `tuple` 限制了数组的长度和类型，当我们仍然可以用类似 `push` 之类的方法来改变数组，但是我们去访问这个通过 `push` 方法添加的元素时会报错，因此在实际开发过程中，强烈不建议这样操作 `tuple`：

```ts
let tuple: [string, number] = ['a', 1]
tuple.push(3)
tuple[2] // Tuple type '[string, number]' of length '2' has no element at index '2'.
```

### Enum

```ts
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green; // 1
```

在默认情况下，枚举类型第一个成员的值从 0 开始，其它成员的值从 0 加 1 递增。

#### 更改默认初始值

枚举类型第一个成员的初始值可以更改，如：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green; // 2
```

上面的例子中，我们将枚举类型中第一个元素的值设置为 1，那么后面元素的值也会在 1 的基础上加 1 递增。

当然，除了给第一个元素手动设置值之外，还可以给其他元素也设置值：

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green; // 2
```

#### 通过 value 找 key

枚举类型可以通过 key 获取相应的 value，也可以通过相应的 value 获取 key：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}

let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```

### Any

`any` 表示一个变量为任意类型。我们在编写代码的时候，可能并不清楚某一个变量到底是什么类型，此时就可以使用 `any` 来进行描述。

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

需要注意的是，`any` 类型的变量，在编译时自动跳过类型检查，因此不要滥用 `any`，否则 TypeScript 将失去它的意义。

### Void

`void` 在 js 中是一种操作符，它可以用任意表达式来返回 `undefined`，如 `void 0` 其返回值就是 `undefined`。有这种设置的主要原因是 `undefined` 在 js 中并不是保留字，因此如果定义了一个 undefined 的变量就会覆盖全局的 `undefined`。

```js
(function() {
  var undefined = 0
  console.log(undefined) // 0
})()
```

而在 ts 中 `void` 用于表示没有数据类型。常用的地方就是当一个函数没有返回值的时候，会定义它的返回类型为 `void`。

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

当声明一个变量为 `void` 类型的时候，只能将 `undefined` 或者 `null` 赋值给这个变量：

```ts
let unusable: void = undefined;
unusable = null;
unusable = 1; // Type '1' is not assignable to type 'void'.
```

### Never

函数有两种情况可以定义它的返回值为 `never`，一种是这个函数必定会抛出异常的时候：

```ts
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}
```

另一种是永远不会返回值的函数，如函数中包含死循环：

```ts
function infiniteLoop(): never {
  while (true) {
  }
}
```

这与函数返回值为 `void` 的情况有点不太一样，`void` 的情况是我们主动不设置 return 值的，而 `never` 这种是死循环根本不会有返回值，这两者还是有区别的。

`never` 类型是所有类型的子类型，但是除了 `never` 本身，并没有一个类型是 `never` 的子类型，即使是 `any` 也不能赋值给 `never` 类型。
