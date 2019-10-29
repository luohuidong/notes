# Excess Property Checks（多余属性的检测）

```ts
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

当我们直接

举一个将字面量直接当作参数传递给函数出现 excess property checks 的例子。

```ts
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

我们可能会奇怪，


对象字面量出现 excess property checks 有两种情况。

第一种情况，将对象字面量赋值给有类型的变量：

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

let squareConfig: SquareConfig = { colour: "red", width: 100 } // ERROR!

/**
 * Type '{ colour: string; width: number; }' is not assignable to type 'SquareConfig'.
 *
 * Object literal may only specify known properties, but 'colour' does not exist
 * in type 'SquareConfig'. Did you mean to write 'color'?
 */
```



