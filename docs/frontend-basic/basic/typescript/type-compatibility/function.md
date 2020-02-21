# 函数兼容性

比较原始类型以及对象类型相对容易理解，但对于函数来说到底怎么样才算是兼容就比较复杂了。让我们从一个简单的例子开始，在例子中两个函数仅仅只有参数列表不一样：

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

检查 `x` 是否能够赋值给 `y`，TypeScript 先看参数列表。`x` 中的每一个参数都必须能在 `y` 的参数中找到兼容类型。需要注意的是，函数的兼容性仅考虑参数的类型，而不考虑参数的名字。在上述的例子中，`x` 中的所有参数都能在 `y` 中找到对应的兼容参数，所以 `x` 可以赋值给 `y`。

`x = y` 报错主要是因为 `y` 的第二个参数并没有在 `x` 中找到对应的兼容类型，因此赋值报错。

你可能会奇怪为什么我们会允许像 `y = x` 那样忽略掉参数。原因在于忽略掉多余的参数在 JavaScript 中普遍存在，如 `Array#forEach` 给回调函数提供了三个参数：数组元素、数组元素对应的索引、整个数组对象。但一般情况下，我们提供的回调函数仅使用第一个参数：

```ts
let items = [1, 2, 3];

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach(item => console.log(item));
```

现在我们通过两个仅返回类型不一样的函数，来看一下如何处理函数的返回类型的兼容性：

```ts
let x = () => ({name: "Alice"});
let y = () => ({name: "Alice", location: "Seattle"});

x = y; // OK
y = x; // Error, because x() lacks a location property
```

类型系统强制源函数的返回类型必须是目标函数返回类型的子类型。

## Function Parameter Bivariance

当对比函数的参数类型的时候，如果源参数可以赋值给目标参数，则参数赋值成功

```ts
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));
```

## 可选参数与剩余参数

在对比两个函数的兼容性的时候，可选参数与必要参数是可以互换的。源类型中多余的可选参数并不会报错，目标函数中的可选参数在源类型中没有对应的参数也不会报错。

当一个函数有 rest 参数，rest 参数将会被当做无限个可选参数。

从一个类型系统的角度来看这并不可靠，但从运行时的角度来看可选参数并不是强制性需要传递的，因为对于大多数函数来说，可选参数的值一般都是 `undefined`。

The motivating example is the common pattern of a function that takes a callback and invokes it with some predictable (to the programmer) but unknown (to the type system) number of arguments:

```ts
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));
```

### Functions with overloads（函数重载）

对于有重载的函数
