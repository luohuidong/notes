# Type Inference (类型推断)

所谓的类型推断，是指不需要指定变量的类型或者不指定函数的返回值类型，TypeScript 可以根据某些规则自动地为其推断出一个类型。

在 TypeScript 中，在没有明确提供类型注解的地方，type inference 会起到提供类型信息的作用。例如：

```ts
let x = 3;
```

变量 `x` 的类型将被推断为 `number` 类型。类似的推断，将会发生在初始化变量和成员、设置参数默认值和决定函数的返回类型的时候。

## Best common type

当类型推断是从多个表达式中得到的时候，这些表达式的类型将用于计算 best common type。如：

```ts
let x = [0, 1, null];
```

当要推断变量 `x` 类型时，我们需要考虑数组中所有元素的类型。我们给数组类型提供了两种选择：`number` 和 `null`。Best common type 算法会考虑每一个候选类型，并得到一个与所有候选类型兼容的类型，由于 `null` 是 `number` 的子类型，因此 `x` 的类型为 `number[]`。

Best common type 需要从所提供的候选类型中选择，但有一些情况就是所有的候选类型都有共同的结构，但是没有一种类型是其它类型的父类型，这个时候可能如：

```ts
let zoo = [new Rhino(), new Elephant(), new Snake()];
```

在理想的情况下，我们希望 `zoo` 变量会被推断为 `Animal[]` 类型，但是因为在数组中没有严格属于 `Animal` 类型的对象，在这种情况下并没有对数组类型进行 best common type 推断。为了解决这个问题，我们可以在没有任何候选类型是其它候选类型的父类型的时候，显式地声明数组类型：

```ts
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
```

当没法找到 best common type 的时候，得到的数组类型将是联合数组类型，`(Rhino | Elephant | Snake)[]`。

## Contextual Typing

类型推断一般是从表达式的右侧去推断左侧的类型，但有时候类型推断也能从左向右推断。这称之为 contextual typing。Contextual typing 发生在表达式的类型已经隐含在它所处的位置时。如：

```ts
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);   //<- OK
  console.log(mouseEvent.kangaroo); //<-·  Error!
};
```

上面的例子中，TypeScript 类型检查器使用 `Window.onmousedown` 方法的类型来推断右侧函数表达式的类型。当它这么做的时候，它能够推断出 `mouseEvent` 参数的类型，该类型包含 `button` 属性而没有 `kangaroo` 属性。

TypeScript 还能够很好地推断出其它上下文中的类型：

```ts
window.onscroll = function(uiEvent) {
  console.log(uiEvent.button); //<- Error!
}
```

由于函数赋值给 `windows.onscroll`，因此 TypeScript 知道 `uiEvent` 参数类型是 [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) 而不是 [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)。由于 `UIEvent` 对象不包含 `button` 属性，因此 TypeScript 会抛出异常。

如果该函数不在能够进行 contextual typing 的位置，则函数的参数将被推断为 `any`，并且不会有任何的错误提示（除非使用了 `--noImplicitAny` 选项）：

```ts
const handler = function(uiEvent) {
  console.log(uiEvent.button); //<- OK
}
```

我们也可以给函数参数一个明确的类型信息，它会覆盖掉任何的 contextual type：

```ts
window.onscroll = function(uiEvent: any) {
  console.log(uiEvent.button);  //<- Now, no error is given
};
```

但是这段代码所打出的日志为 `undefined`，因为 `uiEvent` 并没有一个叫 `button` 的属性。
