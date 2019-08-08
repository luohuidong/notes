# Basic Types 基本类型三

## Tuple

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

## Enum

```ts
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green; // 1
```

在默认情况下，枚举类型第一个成员的值从 0 开始，其它成员的值从 0 加 1 递增。

### 更改默认初始值

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

### 通过 value 找 key

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

## Any

`any` 表示一个变量为任意类型。我们在编写代码的时候，可能并不清楚某一个变量到底是什么类型，此时就可以使用 `any` 来进行描述。

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

需要注意的是，`any` 类型的变量，在编译时自动跳过类型检查，因此不要滥用 `any`，否则 TypeScript 将失去它的意义。

## Void

`void` 在 js 中是一种操作符，它可以用任意表达式来返回 `undefined`，如 `void 0` 其返回值就是 `undefined`。有这种设置的主要原因是 `undefined` 在 js 中并不是保留字，因此如果定义了一个 undefined 的变量就会覆盖全局的 `undefined`。

```js
(function() {
  var undefined = 0
  console.log(undefined) // 0
})()
```

而在 ts 中 `void` 表示没有任何类型的返回值。最为常见的就是一个没有返回值的函数，会定义它的返回类型为 `void`。

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```
