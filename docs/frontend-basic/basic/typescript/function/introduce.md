# 函数介绍

函数是 JavaScript 应用的基础。函数能帮助我们实现抽象层、模仿类、隐藏信息以及模块。在 TypeScript 中，虽然已经存在类、命名空间和模块，但是函数仍然对描述事情应该怎样运作起到了非常重要的作用。TypeScript 在 JavaScript 函数基础上加了新的功能，使得函数更容易使用。

就像在 JavaScript 中一样，TypeScript 函数可以通过命名函数和匿名函数两种方式创建。回顾一下在 JavaScript 中这两种定义函数的方式：

```js
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) {
  return x + y;
};
```

与 JavaScript 相同，TypeScript 中的函数也可以引用函数体外部的变量。当函数这么做的时候，我们可以说它“捕获”了这些变量：

```js
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}
```

