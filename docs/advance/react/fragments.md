# Fragments

## 使用场景

我们在定义组件的时候，通常需要返回好几个元素，这时候就需要用一个东西包裹着，在没有 Fragments 之前，我们通常会使用 `div` 元素进行包裹。这个做法的副作用就是在 DOM 中多了 div 节点。

```javascript
render() {
  return (
    <div>
      <ChildA />
      <ChildB />
      <ChildC />
    <div>
  );
}
```

Fragments 的作用类似，不过它的好处就是它并不会生成额外的 DOM。另外 Fragments 的使用与其它组件一样，其它的组件能在哪里使用，Fragments 就能在哪里使用。给 Fragments 添加 keys 或者 attributes 都可以。

```javascript
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

下面我们通过一个 Table 组件，来加深理解 Fragraments 的使用场景。

Table 组件代码：

```javascript
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

Columns 组件代码：

```javascript
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

上面两个组件组合起来的想过等价于下面的 HTML 结构：

```html
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

我们在 Columns 组件中利用 `div` 去包裹 `tr` 元素的时候，最终造成的结果是对应的 table HTML 结构并不是合法的。

而利用 Fragment 则可以很完美地解决上面出现的问题。下面我们对 Columns 组件的代码改造一下：

```javascript
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

改造后，table 对应的 HTML 结构为

```html
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

## 简写

Fragments 的简写语法看起来像一个空的标签：

```javascript
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

Fragments 的简写的缺点在于它并不支持 keys 或者 attributes。另外使用 Fragments 的简写还需要看一下你的开发工具是否支持，可以参考 [Support for Fragment Syntax](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html#support-for-fragment-syntax) 对开发工具进行改造。

## 参考资料

- [Fragments](https://reactjs.org/docs/fragments.html)

---

文章所参考的文档版本：v16.8.4
