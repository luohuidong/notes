# Image 图片

在网页中添加图片，可以使用 `<img>` 标签来实现，`<img>` 标签是一个空元素，也就是说它没有文字内容以及闭合标签。要使用它，最少需要给它一个 `src` 属性。`src` 属性是一个指向图片的路径。它可以是一个相对路径，也可以是一个绝对路径。

## 相对路径的形式引用图片

如果想加载与 HTML 页面相同目录下的图片，可以像下面那样往页面加入图片：

```html
<img src="dinosaur.jpg">
```

如果图片是在 images 目录子目录下，其 src 路径如下：

```html
<img src="images/dinosaur.jpg">
```

## 绝对路径的形式引用图片

我们可以通过一个绝对路径来加载图片：

```html
<img src="https://www.example.com/images/dinosaur.jpg">
```

但是需要注意的是，使用绝对路径，意味着浏览器会做更多的工作，如从 DNS 服务中获取 IP 地址。如果我们的网站与图片放在相同的服务器的时候，那么使用相对路径而不是绝对路径是一个更好的选择。

## 备选文本

`<img>` 标签有一个 `alt` 属性：

```html
<img src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
        it has a large head with long sharp teeth">
```

当图片无法加载的时候（如提供给 src 的路径错误的情况），赋值给 alt 的内容就会显示出来。

![alt-text](https://mdn.mozillademos.org/files/12702/alt-text.png)

使用 `alt` 属性有几个原因：

- 屏幕阅读器会向视力受损的人提供 alt 属性的内容作为描述图片的信息。
- 提供给 src 的路径可能有误导致图片无法正常加载。
- 浏览器可能不支持图片类型。
- 搜索引擎可以利用 alt 属性的内容。
- 用户会禁用图片，来降低数据传输或对页面内容的干扰。这在移动端上比较常见。

### alt 属性的内容是什么

`alt` 属性的内容取决于图片放置在它所在位置的原因。也就是说，如果图片加载失败，你的页面所表达的内容将缺失掉什么。

以下将以几种情况来说明 `alt` 的内容究竟是什么：

#### 图片起装饰性功能

通常这种情况下，会使用 CSS 的 `background-image` 属性将图片插入到网页中，但是如果我们用了 `<img>` 标签将图片插入到网页中，那么此时应该添加一个空的 `alt` 属性（ `alt=""` ）。因为装饰性的图片，并不是内容的一部分，因此屏幕阅读器不应该耗费时间去阅读它。

#### 图片作为页面的内容的一部分

如果我们的图片提供了重要的信息，`alt` 属性此时应该提供能表达相同信息的简短文字。如果在正文中，已经提供了充足的内容来描述图品，那么此时 `alt` 就不应该再提供重复的信息，可以直接提供一个 `alt` 属性（ `alt=""` ）。

#### 图片作为一个链接的功能

如果我们将图片嵌套在一个 `<a>` 标签中将图片变成链接，那么我们仍然需要提供无障碍的文本（屏幕阅读器会阅读这个文本）。这种情况下，将无障碍文本放置在 `<a>` 标签中或者 `<img>` 标签的 `alt` 属性都可以。

## width 和 height 属性

`<img>` 标签的 `width` 和 `height` 属性可以指定图片的的宽和高。

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341">
```

在图片还没完全加载的时候，可以看到页面上已经为图片腾出了位置：

![alt text with width and height](https://mdn.mozillademos.org/files/12706/alt-text-with-width-height.png)

虽然这能使得页面加载速度更快，加载效果更平滑，但其实我们不应该通过 HTML 属性来更改图片的大小，主要有下面几个原因：

- 如果我们将图片设置得过大，那么图片就会有明显的颗粒感，而且图片会显得模糊。
- 当我们将图片设置得过小的时候，其实用户在加载图片的时候，仍然是按照图片的原始大小来加载的。也就是说，用户加载了远超过他们需求的图片大小，这就造成了带宽的浪费。
- 如果我们在更改图片大小的时候，无法保持图片原来的宽高比，那么图片在页面上的显示效果就会非常别扭。

因此在将图片放到页面之前，应该通过图像软件来来调整图片的大小。如果我们确实需要通过代码的方式来更改图片的大小，则应该使用 CSS 去更改，而不是使用 HTML 来更改。

## 图片标题

类似于超链接，我们可以给图片添加 `title` 属性来提供更进一步的支持信息。当鼠标移动到图片上方的时候，就会出现 title 设置的内容。

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341"
     title="A T-Rex on display in the Manchester University Museum">
```

当鼠标移动到图片上方的时候，就会出现 title 设置的内容：

![image with title](https://mdn.mozillademos.org/files/12708/image-with-title.png)

但是并不推荐使用 title 属性来提供进一步的支持信息，因为 title 会有很多无障碍阅读的问题，主要是屏幕阅读器对 title 的支持情况是不可预测的，而且大多数的浏览器只有鼠标移动到图片的上方才会显示 title 的内容。

因此更为推荐的是将支持信息放在文章的正文部分，而不是放在图片的 title 属性中进行展示。

## 为图片搭配说明文字

我们可以有多种方式来给图片配上文字，如下面的方式：

```html
<div class="figure">
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

这种结构很好，但是有个问题就是，上面的代码中并没有任何语义将图片和它的文字关联起来，这对屏幕阅读器来说就会造成困难了。当页面上展示了很多图片以及这些图片的文字的时候，屏幕阅读器怎么知道哪些文字跟哪些图片关联的？

为了解决这个问题，我们可以使用 HTML5 中提供的 `<figure>` 和 `<figcaption>` 元素。他们给图片提供了一个语义的容器，并且将图片与文字关联起来。前面的例子通过 `<figure>` 和 `<figcaption>` 重写之后的例子如下：

```html
<figure>
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

`<figcaption>` 明确地告诉了浏览器以及辅助技术这个文字描述了 `<figure>` 中的其它内容。

## 通过 CSS 插入图片

除了使用 `<img>` 标签来将图片插入到页面中，我们还可以利用 CSS `background-image` 属性的方式达到同样的目的。

例如，我们可以给页面中所有的 `<p>` 标签设置背景图片：

```html
p {
  background-image: url("images/dinosaur.jpg");
}
```

但是需要注意的是通过 CSS 的方式去引入背景图片，图片更为偏重的是起到一个装饰的效果。这种方式插入的图片，是没有任何语义的，而且图片对于屏幕阅读器来说也是不可见的。因此如果你想增强页面的视图效果，是可以通过这种方式来向页面插入图片的。

因此，如果图片是有意义的，是页面内容的一部分，这个时候就更应该使用 HTML 的方式来插入图片。
