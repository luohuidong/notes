# 枚举的类型

枚举有两种类型，字符串枚举和数字枚举。

## 数字枚举 (numeric enums)

```ts
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
```

数字枚举，它的成员取值从 0 开始，后面成员取值自动 +1 递增。

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

## 字符串枚举

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

## 枚举成员值为只读

无论是什么类型的枚举，其成员定义了之后就变成只读了，因此如果尝试修改是会提示报错的：

```ts
enum Color {
  Red
  Green,
  Blue
}

Color.Red = 2; // Error: Cannot assign to 'Red' because it is a read-only property.
```

## 参考资料

- [Numeric enums](http://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums)
- [String enums](http://www.typescriptlang.org/docs/handbook/enums.html#string-enums)
- [Heterogeneous enums](http://www.typescriptlang.org/docs/handbook/enums.html#heterogeneous-enums)
