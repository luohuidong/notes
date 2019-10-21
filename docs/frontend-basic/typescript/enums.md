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

而枚举类型分为字符串枚举和数字枚举。

## 数字枚举

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

在上面编译后的 JS 代码就是枚举类型的实现原理。从上面的代码可以看到 value 被作为 key，而 key 也被作为 value，这种方法叫做反向映射。

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

