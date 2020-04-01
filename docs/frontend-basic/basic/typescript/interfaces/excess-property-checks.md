# Excess Property Checks（多余属性的检测）


```ts
interface Label {
  label: string
}

function printLabel(labeledObj: Label) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

从上面的例子我们可以知道，ts 是允许我们将 `{ size: number, label: string }` 传递给仅仅只需要 `{label: string }` 的地方。

但是如果我们直接使用 object literal（对象字面量）的时候，就会出现 excess property checks 的情况。例如我们直接将 object literal 赋值给某个被 interface 定义了结构的变量，又或者直接作为参数传递给函数。

```ts
// Object literal 赋值给被 interface 定义了结构的变量的情况

interface Label {
  label: string
}

function printLabel(labeledObj: Label) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/**local
 * Type '{ size: number; label: string; }' is not assignable to type 'Label'.
 *
 * Object literal may only specify known properties, and 'size' does not exist
 * in type 'Label'.
 * /
```

```ts
// Object literal 直接作为函数参数的情况

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ colour: "red", width: 100 }); // ERROR!

/**
 * Argument of type '{ colour: string; width: number; }' is not assignable to
 * parameter of type 'SquareConfig'.
 *
 * Object literal may only specify known properties, but 'colour' does not
 * exist in type 'SquareConfig'. Did you mean to write 'color'?
 * /
```

上面 ts 的错误提示中，明确地指出了 Object literal 只能指定 interface 中定义的属性。而且 ts 非常人性化地提示我们是不是 `colour` 这个属性是不是应该书写成 `color`。

## 绕开 excess property checks

有时候我们可能不想 ts 给对象进行多余属性的检测，解决方法很简单，后面会提供几种方式来解决。

### 使用 type assertion（类型断言）

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

类型断言的含义就是明确告诉编译器我们所传入的对象字面量是什么类型，这样编译器就会绕过多余属性的检查。

### 使用索引签名

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

我们在 [] 中定义了一个 `propName` (这个名字随便起)，它的类型是 `string`，其返回值为 `any`。这就是一个字符串索引签名。它的含义就是通过任意的字符串去索引 SquareConfig 可以得到任意的结果，这样 SquareConfig 类型的对象就可以支持多个属性了。

### 将对象字面量赋值给变量

最后一种方式就是将对象字面量直接赋值给一个变量。

```ts
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

### 总结

- 前面几种方式可以绕过多余类型检测，但是有一个必须满足的前提：定义的接口与对象存在相同的属性。
- 虽然我们可以绕过多余类型检测，但是大多数的多余类型检测提示的错误，确确实实就是我们程序的 Bug。
