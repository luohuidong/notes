# 什么是 Babel

Babel 主要用于将 ECMAScript 2015+ 的代码转换成能在现代浏览器（或环境）和老浏览器（或环境）都能运行 JavaScript 版本。也就是说，Babel 对我们用新标准所写的 JavaScript 代码，做了向后兼容。

Babel 的主要工作：

1. 转换语法，即对 ES2015+ 的新语法进行转换。
1. 对目标环境所缺失的功能进行 polyfill（polyfill 可以理解为对缺失的功能进行填补）。

## Babel 特点

- 利用 Plugins，我们可以使用最新的 ECMAScript 语法去编写我们的代码，而无需等待浏览器的支持。
- 转换 JSX 语法。
- 清除 TypeScript 和 Flow 中的 type annotations。需要注意的是，Babel 并不做类型检测，如果需要做类型检测，仍然需要安装 TypeScript 或者 Flow。
- Babel 是通过 plugins 构建的，因此我们可以利用已有的 plugins 或者自己的写的 plugins 来组合自己的 transformation pipeline。
- Babel 的 Source map 能让我们更好地调试代码问题

## Babel 相关资料

- [Babel](https://babeljs.io/docs/en/)
- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/README.md)

## 参考资料

- [What is Babel?](https://babeljs.io/docs/en/)
