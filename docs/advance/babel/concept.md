# 基础概念

从 Babel 7 开始，所有的 Babel 模块，都会发布在 npm 包的 `@babel` 域下，例如 `@babel/core` 和 `@babel/cli` 。模块化的设计，使得不同的工具能够针对不同的应用场景进行设计。

## Core Library

Babel 的核心功能处于 `@babel/core` 这个模块中。

## CLI 工具

`@babel/cli` 工具能够让我们直接在终端中使用 Babel。

## Plugins

Babel 对代码的转换是以 plugins 的形式呈现的。每个 plugin 都是一个小的 JavaScript 程序，它指示 Babel 如果对代码进行转换。我们甚至可以编写自己的 plugin 来得到想要的转换效果。

想要将 ES2015+ 的语法转换成 ES5，可以使用官方提供的 plugin，如 `@babel/plugin-transform-arrow-functions` 。

## Presets

我们可以使用 plugin 来指示 Babel 对某个 ES2015+ 语法的转换，但当我们的代码中有多个 ES2015+ 特性需要转换的时候，一个特性配置一个 plugin 未免有些麻烦。为了解决这个问题，我们可以使用 preset。

preset 是一个预设了一组 plugins 的集合。与 plugins 类似，我们也可以自己创建一个 preset，用于分享我们自己的 plugins 组合。

例如 `@babel/preset-env` 这个 preset 中，包含了所有支持现代 JavaScript 特性的 plugins。通过这个 preset 我们就无需给每个 ES2015+ 语法配置一个单独的 plugin 来进行处理了。

## Configuration

每次通过 CLI 工具来执行 Babel 都需要传大量的参数未免有些繁琐，通过编写配置文件可以免除这个烦恼。

## Polyfill

Polyfill 就是将环境中缺失的 feature 给补充上，因此我们在使用 `@babel/polyfill` 之后，能够在老的浏览器环境中使用类似于 `Promise` 的 ES2015+ 特性.

`@babel/polyfill` 模块包含 `core-js` 和一个自定义的 regenerator 运行时去模拟整个 ES2015+ 环境。

这就意味着我们可以使用：

- 类似于 `Promise` 或者 `WeakMap` 的内置函数。
- 类似于 `Array.from` 或者 `Object.assign` 的静态方法。
- generator 方法。

为了做到以上几点，ployfill 添加到 global 上以及原生原型上 (prototypes)，如 `String` 。

需要注意的是，在使用 npm 安装 `@babel/ployfill` 的时候应该添加 `--save` 参数而不是 `--save-dev` 参数，polyfill 需要在我们源码之前去执行的。

## 参考资料

- [Usage Guide](https://babeljs.io/docs/en/usage)
