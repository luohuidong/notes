# 函数类型

## 给函数添加类型

我们可以给函数的所有参数都添加类型，并且给函数添加返回类型。TypeScript 可以通过返回类型来推断函数的返回类型，因此在很多时候我们其实是不需要给函数添加返回类型的。

```ts
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };
```

## 编写函数类型

之前的例子中，我们已经为函数添加了类型。我们根据之前给函数每一部分添加的类型，然后写一个完整的函数类型：

```ts
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
```

函数类型有两部分，分别是参数类型以及返回类型。当要写一个完整的函数类型的时候，这两部分都是不可缺少的。

在写参数类型的时候就像写函数列表一样，我们会给每一个参数都配有名字和类型。参数的名字仅仅只是提升可读性而已，我们完全可以像下面那样编写函数类型：

```ts
let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
```

函数类型中，不管参数如何命名，只要参数类型匹配，那么就可以认为是一个有效的函数类型。

函数类型中，通过在参数与返回类型之间添加 `=>` 的方式来让我们清楚知道哪一部分是返回类型。正如前面所提到的，返回类型也是函数类型中必要的部分，因此如果函数没有返回值的时候，返回类型则应该使用 `void`。

值得注意的是，函数类型仅由参数以及返回类型组成。函数体中捕获的变量并不会反映在类型定义中。实际上，捕获变量只是函数“隐藏状态”的一部分，而不是 API 的组成部分。

## 推断类型

如果只在等式的一边定义了类型，TypeScript 编译器也会得知等式另一边的类型：

```ts
// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return  x + y; };

// The parameters 'x' and 'y' have the type number
let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
```

这称之为 contextual typing，是一种类型推断的形式。Contextual typing 能够减少程序中定义类型的工作量。
