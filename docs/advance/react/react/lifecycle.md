# 生命周期函数

## 常用生命周期函数

### constructor()

```javascript
constructor(props) {}
```

constructor 是 ES6 Class 的语法，在类被实例化的时候会被调用，一般会被用来初始化 state，或者绑定函数，如：

```javascript
class Component() {
  constructor(props) {
    this.state = {
      this.foo = []
    }
    this.bar = this.bar.bind(this)
  }
  bar() {}
}
```

但是使用 babel 之后，在使用 class 的时候，一般会直接使用简写来定义 state 以及使用箭头函数来定义函数：

```javascript
class Component() {
  state = {
    this.foo = []
  }
  bar = () => {}
}
```

箭头函数由于没有 this，所以，所以如果在箭头函数内部使用 this 的话，它的 this 是由父级作用域来决定的，因此就免去了使用 bind 绑定 this 这一步骤。

### componentDidMount()

`componentDidMount()` 会在组件 mounted 之后就会被调用，此时组件的 DOM 结构已经完整生成。如果涉及 DOM 节点的操作的话，就可以在这个函数里面操作了。

另外这个函数是设置 subscription 的好地方，如果设置了 subscription 的话，请记得在 `componentWillUnmount()` unsubscribe。

### componentDidUpdate()

```javascript
componentDidUpdate(prevProps, prevState, snapshot)
```

当组件已经更新之后，就会被调用。在这个函数中，同样适合做 DOM 操作。而且它还适合对比组件当前 props 与组件之前的 props，然后进行网络请求，一般在初始化表单的时候会比较常用。

第三个参数 snapshot 需要组件实现了 `getSnapshotBeforeUpdate()` 并且返回了值后才会有值，否则这个参数获取的值是 undefined。

### componentWillUnmount()

这个函数会在组件 unmounted 或 destroyed 之前被调用。这个函数中进行清除 timer，取消网络网络操作，或者清除 subscription 等。

需要切记，在这个函数中不要再调用 `setState()` 了，因为组件 unmounted 和 destroyed 之后，即便调了 `setState()` 之后，组件也会被 re-rendered。

## 非常用生命周期函数（未完成）

下面所介绍的生命周期函数在某些情况下使用会很便利，但是在大多数情况下是用不上的。

### shouldComponentUpdate()

```javascript
shouldComponentUpdate(nextProps, nextState) {}
```

在默认情况下，组件的 state 与 props 的改变会因引起组件的更新。 `shouldComponentUpdate()`  可以控制组件是否在 state 或者 props 改变的时候进行更新，所以一般它会用在组件性能优化方面。

但在组件性能优化上，一般首选使用 PureComponent，而不是自己去实现 `shouldComponentUpdate` ，PureComponent 会通过浅对比 props 和 state 来减少组件的更新次数，从而实现组件性能优化。

`shouldComponentUpdate()` 会在组件 re-rendering 之前调用，函数默认返回 true，如果返回 false 的话，则组件就会跳过更新。需要注意的是， `shouldComponentUpdate()` 返回 false 并不能阻止子组件在 state 变化是所触发的更新。

另外并不推荐在 `shouldComponentUpdate()` 中对 state 和 nextState、props 和 nextProps 进行深度对比，例如使用 lodash 或者 `JSON.stringfy()` 进行对比，因为这样的效率是非常低效的，在性能上面会表现得非常糟糕。

目前，当 `shouldComponentUpdate()` 返回 false 得话， `componentDidUpdate()` 是不会被调用的。在未来，React 也许会将 `shouldComponentUpdate()` 作为提示而不是严格的指令来执行，可能存在返回 false 的情况下，组件仍然 re-rendering。

### static getDerivedStateFromProps()

这个函数的名字又长又臭。。。一看就是个不常用的货。主要是一看这个函数名，获取来自于 props 的 state？？？啥意思？？？一脸懵逼。

```javascript
static getDerivedStateFromProps(props, state) {}
```

`getDerivedStateFromProps` 会在 render 函数调用之前被触发。它需要返回一个对象去更新 state，如果不更新 state 的话则需要返回 null。

`getDerivedStateFromProps` 的存在只有一个目的，它能够让组件通过 props 的改变而改变其自身的 state。

TODO：参考下面的文章完成文章

- [React.Component](https://reactjs.org/docs/react-component.html)
- [When to Use Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)

## 参考资料

- [React.Component](https://reactjs.org/docs/react-component.html)
- [When to Use Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)
