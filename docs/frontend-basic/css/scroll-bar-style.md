# 滚动条样式

使用 `::-webkit-scrollbar` 伪元素，可以用来修改元素的滚动条各个部分的样式。

> 但需要注意的是这还未成为标准，所以存在浏览器的兼容性问题，其表现可能在未来会发生改变 。目前 `::-webkit-scrollbar` 仅在基于 `WebKit` 的浏览器中生效，因此尽量不要在生产环境中使用。

下面的伪类可以用来自定义滚动条各个部分的样式：

- `::-webkit-scrollbar`: 指整个滚动条。
- `::-webkit-scrollbar-button`：指滚动条上的按钮，即向上和向下的箭头。
- `::-webkit-scrollbar-thumb`：指滚动条上可拖动的部分。
- `::-webkit-scrollbar-track`：指滚动条轨道部分。
- `::-webkit-scrollbar-track-piece`：指滚动条上不是进度条所在的轨道部分，在页面效果会直接覆盖  `::-webkit-scrollbar-track` 定义的样式效果。
- `::-webkit-scrollbar-corner`：水平滚动条与垂直滚动条的交界处。
- `::-webkit-resizer`：某些元素右下角出现的可调整元素大小的拖拽区域区域，如 teatarea 元素的右下角。

## 例子

[CodePen Demo](https://codepen.io/luohuidong/pen/PooodGx)

```html
<div id="container">
  <div id="example">
    <div></div>
  </div>

  <textarea id="story" name="story"
            rows="5" cols="33">
    It was a dark and stormy night...
    It was a dark and stormy night...
    It was a dark and stormy night...
    It was a dark and stormy night...
    It was a dark and stormy night...
    It was a dark and stormy night...
    It was a dark and stormy night...
  </textarea>
</div>
```

```css
body {
  padding: 0;
  margin: 0;
}

#container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#example {
  height: 200px;
  width: 900px;
  margin-bottom: 10px;
  background: green;
  overflow-y: auto;
}

#example > div {
  height: 1000px;
  width: 2000px;
}
/* 滚动条整体样式 */
#example::-webkit-scrollbar {
  width: 20px;
  height: 40px;
  background-color: #aaa;
}
/* 滚动条上的按钮样式 */
#example::-webkit-scrollbar-button {
  height: 20px;
  background: rgb(255, 0, 0);
}
/* 进度条样式 */
#example::-webkit-scrollbar-thumb {
  width: 5px;
  background: #000;
  border: 5px solid #3e3e42;
}
/* 滚动条轨道样式 */
#example::-webkit-scrollbar-track {
  background: blue;
}
/* 滚动条非进度条区域样式 */
#example::-webkit-scrollbar-track-piece {
  background: yellow;
}
/* 横竖滚动条交界处的样式 */
#example::-webkit-scrollbar-corner {
  background: orange;
}


/* textarea 横竖滚动条交界处的样式 */
#story::-webkit-scrollbar-corner {
  background: green;
}
/* 左下角可调整 textarea 大小的拖拽区域 */
#story::-webkit-resizer {
  background: orange;
}
```

## 参考资料

- [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
