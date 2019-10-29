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

/**
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
