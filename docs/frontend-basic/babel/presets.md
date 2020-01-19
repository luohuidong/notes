# Presets

如果不想自己动手组合 plugins 的集合，那么可以使用 presets。我们可以将 Presets 作为一组 plugins 的集合，除了作为 plugins 的集合，presets 甚至可以用于共享 `options` 的配置。

对于一些常用的环境，Babel 官方提供了一些 presets：

- `@babel/preset-env` ：使用了这个 presets 之后，我们就不需要单独去给某个特定的 ECMAScript 新特性去配置 plugin，它会自动根据我们的目标环境，自动处理这些东西。
- `@babel/preset-flow` ：这个 presets 包含了去除 flow 语法的 plugins。
- `@babel/preset-react` ：这个 presets 包含了开发 React 相关的 plugins。
- `@babel/preset-typescript` ：这个 presets 包含了开发 typescript 的 plugins。

## 创建一个 Preset

创建一个自己的 preset 是非常简单的事，仅仅需要 export 一个 配置就行。

例如配置可以返回一个 plugins 的数组：

```javascript
module.exports = function() {
  return {
    plugins: [
      "pluginA",
      "pluginB",
      "pluginC",
    ]
  };
}
```

配置还可以包含其它的 preset，以及包含 options 的 plugins：

```javascript
module.exports = () => ({
  presets: [
    require("@babel/preset-env"),
  ],
  plugins: [
    [require("@babel/plugin-proposal-class-properties"), { loose: true }],
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
});
```

## Preset 路径

如果 preset 是通过 npm 安装的，那么在配置 preset 的时候，可以直接写它的包名，Babel 会它是否已经安装在 node_modules 中：

```json
{
  "presets": ["babel-preset-myPreset"]
}
```

我们也可以直接写 presets 的绝对路径或者相对路径：

```json
{
  "presets": ["./myProject/myPreset"]
}
```

## Preset 的简写

如果 package 的包名是以 `babel-preset-` 开头，那么我们可以使用简写：

```javascript
{
  "presets": [
    "babel-preset-myPreset"
  ]
}

// 等价于

{
  "presets": [
    "myPreset",
  ]
}
```

这同样使用于 scoped packages：

```javascript
{
  "presets": [
    "@org/babel-preset-name",
  ]
}

// 等价于

{
  "presets": [
    "@org/name"
  ]
}
```

## Preset 顺序

Preset 执行的顺序跟我们定义的顺序是相反的：

```json
{
  "presets": [
    "a",
    "b",
    "c"
  ]
}
```

上面 presets 指定的顺序为 c, b 然后 a。

由于大多数用户在写 presets 的时候，都会将 es2015 写在 stage-0 之前，因此 Preset 执行顺序与定义顺序相反能够确保 JavaScript 的向后兼容性。

<a name="TopRe"></a>
## Preset 参数

无论是 plugins 还是 presets，都能配置参数。在 presets 没有参数的情况下，下面 presets 的三种写法完全等价：

```json
{
  "presets": [
    "presetA",
  ]
}

// 等价于

{
  "presets": [
    ["presetA"],
  ]
}

// 等价于

{
  "presets": [
    ["presetA", {}],
  ]
}
```

定义了参数的 presets 如下：

```json
{
  "presets": [
    ["@babel/preset-env", {
      "loose": true,
      "modules": false
    }]
  ]
}
```

## 参考资料

- [Presets](https://babeljs.io/docs/en/presets)
