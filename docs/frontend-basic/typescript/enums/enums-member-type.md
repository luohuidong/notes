# 枚举成员类型

枚举成员类型分为两类，一类为 constant member，另一类为 computed member。

## constant member

constant member 会在编译的时候就计算出值，下面为 constant member 的例子：

```ts
enum Char {
  a,
  b = Char.a,
  c = 1 + 3
}
```

上面的代码编译结果为：

```js
"use strict";
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
})(Char || (Char = {}));
```

通过下面几种情况，可以判断一个枚举成员是否为 constant members：

- 枚举成员为枚举类型中的第一个成员，而且并没有指定初始化的值，这种情况下它的默认值为 0。

  ```ts
  // E.X is constant:
  enum E { X }
  ```

- 某个枚举成员没有指定初始化值，并且前一个枚举成员为数字常量，在这种情况下枚举成员的值为前一个枚举成员的值 +1。

  ```ts
  // All enum members in 'E1' and 'E2' are constant.

  enum E1 { X, Y, Z }

  enum E2 {
      A = 1, B, C
  }
  ```

- 某个枚举成员通过常量枚举表达式进行初始化。常量枚举表达式是 TypeScript 表达式的子集，它能够在编译阶段就得出值。如果一个表达式满足下面几种情况就是常量枚举表达式：

  1. 一个字面量枚举表达式，通常是字符串字面量或者数字字面量。
  2. 对前面定义的常量枚举成员的引用，这个常量枚举成员可以是其它枚举的成员。
  3. 带括号的常量枚举表达式
  4. 应用了 `+`, `-`, `~` 等一元运算符的常量枚举表达式。
  5. 应用了 `+`, `-`, `*`, `/`, `%`, `<<`, `>>`, `>>>`, `&`, `|`, `^` 等二元运算符的常量枚举表达式。

如果在编译阶段，常量枚举表达式的值为 `NaN` 或者 `Infinity`， 那么会直接报错。

## computed member

前面几种情况可以判断一个成员是否为 constant member，那么其它情况都可以认为是 computed member。computed member 它的值为一些非常量的表达式，其值并不会在编译阶段计算值，而是会保留到执行阶段。下面为 computed
member 的例子：

```ts
enum Char {
  d = Math.random(),
  e = '123'.length
}
```

上面的代码编译结果为：

```js
"use strict";
var Char;
(function (Char) {
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
```

在使用 computed member 的时候，后面紧跟的成员一定需要赋予初始值，否则会报错

```ts
enum Char {
  d = Math.random(),
  e = '123'.length,
  f // Error: Enum member must have initializer.
}
```
