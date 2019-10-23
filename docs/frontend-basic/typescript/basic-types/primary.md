# 原始数据类型

本小节将介绍 TS 与 ES 中对应的原始数据类型

## Undefined 和 Null

在 TypeScript 中，`undefined` 和 `null` 的类型就是 `undefined` 及 `null`。

```ts
let u: undefined = undefined;
let n: null = null;
```

默认情况下 `null` 和 `undefined` 是所有其它类型的子类型，这意味着你能将 `null` 和 `undefined` 赋值给其它类型。

```ts
let foo: number = 2;
foo = null;
foo = undefined;
```

当一个变量定义为 `undefined` 或者 `null` 类型，就意味着无法再给这个变量赋其它值了（如 Number 值），因此在实际使用中，是很少会将一个变量定义为这两种类型的。

```ts
let u: undefined = undefined;
u = null;
u = 2; // Type '2' is not assignable to type 'undefined'.
```

如果使用了 `--strictNullChecks` flag 的时候，`null` 或者 `undefined` 就仅仅只能赋值给 `any` 类型或者它们所对应的类型，这能避免很多普遍的错误。

## Boolean

`boolean` 类型在 TypeScript 中与 ECMAScript 中无异。

```ts
let isDone: boolean = fales;
```

## Number

TypeScript 与 ECMAScript 中的 Number 类型都是浮点数，但是在进制表示上会有一些不一样。

ECMAScript 中，Number 无法直接表示二进制的、仅能表示八进制、十进制、十六进制。而 TypeScript 中，则能表示二进制、八进制、十进制、十六进制的数。另外 ECMAScript 的八进制表示与 TypeScript 也存在差异，ECMAScript 八进制字面值的第一位必须是零(`0`)，而 TypeScript 八进制字面值的开头则为 `0o`。

```js
let decimal = 6;
let hex = 0xf00d;
let octal = 0744
```

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

TypeScript 中的 String 类型与 ECMAScript 相同。

```ts
let color: string = "string"
```

## 参考资料

- [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
