# Plugins

Babel 是一个编译器，像其他编译器一样，它的编译过程分为 3 步：

1. 解析
1. 转换
1. 打印输出

现在，开箱即用的 Babel 并不会做任何事，它的行为就像是 `const babel = code => code` ，它解析了代码，并生成输出相同的代码。如果我们想要 Babel 做什么事情，就需要添加 plugins 了。

除了单独使用 plugin，我们还可以通过 preset 的形式来使用一组 plugins。

## Plugins 的类型

Plugins 分为两类，一种是 Transform Plugins，这种 plugin 会转换你的代码。另一种是 Syntax Plugins，这种 plugins 的作用是让 Babel 去解析特定类型的语法，而不会做转换的操作。

需要注意的是，transform plugins 会自动开启对应的 syntax plugins。如果 transform plugin 已经在使用的话，那么我们并不需要额外地指定对应的 syntax plugin。

## Plugin/Preset 路径

如果 plugin 是通过 npm 的方式去安装，我们就可以直接写这个 plugin 的名字，babel 会检测这个 plugin 是否已经安装在 `node_modules` 中。

```json
{
  "plugins": ["babel-plugin-myPlugin"]
}
```

当然也可以指定 plugin 的相对路径或绝对路径。

```json
{
  "plugins": ["./node_modules/asdf/plugin"]
}
```

### plugin 的缩写

如果 plugin 的名字是以 `babel-plugin-` 开头，那么你可以使用缩写：

```javascript
{
  "plugins": [
    "myPlugin" // 等价于 "babel-plugin-myPlugin"
  ]
}
```

这对 scoped packages 同样适用：

```javascript
{
  "plugins": [
    "@org/name" // 等价于 "@org/babel-plugin-name",
  ]
}
```

## Plugin 顺序

如果两个 transforms 都对程序中同一个节点进行处理，那么 transforms 的执行顺序将受 plugin 或者 preset 的顺序影响。

下面将介绍 plugins 和 Presets 的执行顺序：

- Plugins 会比 Presets 执行得早。
- Plugins 的执行顺序与定义的顺序相同，从第一个开始，执行到最后一个
- Presets 的执行顺序则相反，它是从最后一个开始，然后执行到第一个。

下面举一个 plugins 的例子：

```json
{
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```

上面的例子中，plugins 的执行顺序是先执行 `transform-decorators-legacy` 然后在执行 `transform-class-properties` 。

下面举一个 presets 的例子：

```json
{
  "presets": ["es2015", "react", "stage-2"]
}
```

presets 的执行顺序是 `stage-2` ， `react` ， `es2015` 。

## Plugin 参数

我们所定义的 plugins 和 presets 是可以传参的。

在没有传参的情况下，下面所列举的三种形式是等价的：

```json
{
 "plugins": [
   "pluginA"
 ]
}

// 等价于

{
  "plugins": [
    ["pluginA"]
  ]
}

// 等价于

{
  "plugins": [
    ["pluginA", {}]
  ]
}
```

向 plugins 传参的例子如下：

```json
{
  "plugins": [
    [
      "transform-async-to-module-method",
      {
        "module": "bluebird",
        "method": "coroutine"
      }
    ]
  ]
}
```

presets 的参数也跟 plugins 类似：

```json
{
  "presets": [
    [
      "env",
      {
        "loose": true,
        "modules": false
      }
    ]
  ]
}
```

## 参考资料

- [Plugins](https://babeljs.io/docs/en/plugins)
