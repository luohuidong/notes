# 枚举

先来看一个角色判断的例子：

```js
function initByRole(role) {
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
}
```

这段代码是不同的角色对应着不同的权限，但这段代码呈现出来非常明显的问题：

1. 可读性差：如果没有文档或者注释，是很难记住数字的含义。
2. 可维护性差：代表角色的数字都被硬编码，如果后面这些角色对应的数字发生了改变，那么修改的成本和风险都会非常大，容易出现牵一发而动全身的问题。

如果想解决这种问题，就可以使用 TS 中的枚举类型。而所谓的枚举，就是一组有名字的常量集合。

以通讯录举例子，我们一般只会去记住人名，而不会选择直接去记住具体的手机号，通过名字去搜索对应的手机号就可以了。况且电话号码是会变的，而人名基本上不会变。手机号就类似于枚举类型中的常量，而人的名字就对应着枚举类型中这些常量的名字。

## 枚举的类型

枚举有两种类型，字符串枚举和数字枚举。

### 数字枚举 (numeric enums)

```ts
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
```

数字枚举，它的成员取值从 0 开始，后面成员取值自动递增。

使用枚举类型非常简单，只需要将枚举成员当做枚举的属性来访问即可：

```ts
console.log(Role.Reporter) // 0
```

如果不想从 0 开始，也可以直接改第一个成员赋值：

```ts
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
```

上面的代码，它的成员取值就会从 1 开始，后面的成员值也是自动递增。

我们可能发现枚举与对象非常类似，而枚举类型最终转换成 JS 的代码就是以对象的形式存在，如将前面的 Role 编译成 JS 的代码：

```js
"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
```

在上面编译后的 JS 代码就是枚举类型的实现原理。从上面的代码可以看到 value 被作为 key，而 key 也被作为 value，这种方法叫做反向映射 (reverse mapping)。

将 Role 打印出来，它的数据结构为：

```js
{
  0: "Reporter"
  1: "Developer"
  2: "Maintainer"
  3: "Owner"
  4: "Guest"
  Developer: 1
  Guest: 4
  Maintainer: 2
  Owner: 3
  Reporter: 0
  __proto__: Object
}
```

因此我们既可以用枚举成员的名字来索引，也可以使用枚举成员的值来索引。

### 字符串枚举

```ts
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
```

需要注意的是，字符串枚举是没有做反向映射的。我们可以看一下 Message 枚举类型经过编译后的 JS 代码：

```ts
"use strict";
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
```

## 异构枚举 (Heterogeneous enums)

当数字枚举和字符串枚举混合使用的时候，就构成了异构枚举。但是这种情况比较容易造成混淆，因此不建议使用。下面是一个异构枚举的例子：

```ts
enum Answer {
  N,
  Y = 'Yes'
}
```

## 枚举成员的一些性质

### 枚举成员值为只读

枚举成员定义了之后，就是只读的，因此如果尝试修改是会提示报错的：

```ts
enum Color {
  Red
  Green,
  Blue
}

Color.Red = 2; // Error: Cannot assign to 'Red' because it is a read-only property.
```

### 枚举成员类型

枚举成员类型分为两类，一类为 constant member，另一类为 computed member。

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

而 computed member 它的值为一些非常量的表达式，其值并不会在编译阶段计算值，而是会保留到执行阶段。下面为 computed member 的例子：

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

