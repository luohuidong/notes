# 其它

## 常量枚举

用 const 声明的枚举就是常量枚举，常量枚举有一个特性，就是会在编译阶段被移除。

```ts
const enum Month {
  Jan,
  Feb,
  Mar
}

const month = [Month.Jan, Month.Feb, Month.Mar]
```

编译结果：

```js
"use strict";
const month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
```

当我们不需要一个对象，而只需要一个对象的值的时候，就可以使用常量枚举了，这样就能减少编译后的代码。

## 枚举类型

在某些情况下，枚举和枚举成员都可以作为一种单独的类型存在。

第一种情况就是枚举类型没有任何初始值：

```ts
enum E { a, b }
```

第二种情况是所有枚举成员都是数字枚举：

```ts
enum F { a = 0, b = 1 }
```

第三种情况就是所有枚举成员都是字符串枚举：

```ts
enum G { a = 'apple', b = 'banana' }
```
