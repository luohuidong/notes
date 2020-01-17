# 配置 Babel 简介

ESLint 或者 TypeScript 可以有自己的配置文件，Babel 与它们类似，同样可以有自己的配置文件。

Babel 的配置文件有两种形式，一种是通过通过 `babel.config.js` 的文件形式，另一种是通过 `.babelrc` 的文件形式。

那么我们应该选择哪种文件形式来编写 Babel 的配置呢?

- 当你希望以编程的方式去创建配置或者希望编译 `node_modules` ，那么我们以 `babel.config.js` 的形式来编写 Babel 配置。
- 如果你的 Babel 配置是静态的，那么可以选择以 `.babelrc` 的形式来编写 Babel 配置。

推荐使用 `babel.config.js` 这种形式来配置 Babel，因为 Babel 本身就是使用这种形式。

另外除了通过配置文件来配置 Babel 外，还可以通过 CLI 或者 API 来进行配置，下面将简单介绍配置 Babel 的几种方式。

## babel.config.js

在项目的根目录创建一个 `babel.config.js` 文件（也就是 `package.json` 文件放置的位置），其内容结构如下：

```javascript
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

## .babelrc

创建一个 `.babelrc` 文件，其内容结构如下：

```javascript
{
  "presets": [...],
  "plugins": [...]
}
```

### package.json

我们还可以在 package.json 中通过 `babel` 属性定义 `.babelrc` 的配置，内容如下：

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

### .babelrc.js

`.babelrc.js` 的配置类似于 `.babelrc` ，但是是通过 JavaScript 来写，内容如下：

```javascript
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```

通过这种形式，还可以使用 Node.js APIs，如：

```javascript
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```

## 使用 CLI

```shell
babel --plugins @babel/plugin-transform-arrow-functions script.js
```

## 使用 API

```javascript
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});
```

## 参考资料

- [Configure Babel](https://babeljs.io/docs/en/configuration)
