# TS 扩展类型

本小节将介绍 TS 的扩展类型，该小节的数据类型在 ES 中并不存在。

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

## Never

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

## 参考资料

- [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
