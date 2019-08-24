# Basic Types 基本类型二

本章将介绍与 ES6 对应的引用类型

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

如果数组元素有多种类型，那么可以使用联合类型来定义：

```ts
let list: Array<number | string> = [1, 2, 3, '4'];
```

上面的例子中表示数组中的元素即可以是 `number` 类型，也可以是 `string` 类型。

## Function

在声明函数的时候，需要给函数的参数指定类型，此时函数的返回值类型可以省略，因此 ts 会自动推断返回类型：

```ts
let add = (x: number, y: number) => x + y
```

声明函数类型还可以通过下面的形式来定义：

```ts
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;
```

## 参考资料

- [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
