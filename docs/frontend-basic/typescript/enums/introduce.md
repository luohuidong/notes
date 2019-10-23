# 介绍

先来看一个角色判断的例子：

```js
function initByRole(role) {
  if (role === 1) {
    // do sth
  } else if (role === 2) {
    // do sth
  } else if (role === 3) {
    // do sth
  } else if (role === 4) {
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

以通讯录作类比，我们一般只会去记住有意义的人名，而不会直接去记住没有具体意义的手机号。电话号码是会变的，而人名基本上不会变，因此一般都是通过搜索名字来获取对应的手机号。手机号就类似于枚举类型中的常量，而人的名字就对应着枚举类型中这些常量的名字。

前面的例子，使用枚举类型来提高一下可读性：

```ts
enum Role {
  Viewer,
  Contributor,
  Admin,
  Owner
}

function initByRole(role) {
  if (role === Role.Viewer) {
    // do sth
  } else if (role === Role.Contributor) {
    // do sth
  } else if (role === Role.Admin) {
    // do sth
  } else if (role === Role.Owner) {
    // do sth
  } else {
    // do sth
  }
}
```
