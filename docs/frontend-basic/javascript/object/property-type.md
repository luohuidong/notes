# 对象属性类型

对象有两种属性 (property)：数据属性和访问器属性。

## 属性特性

在 ES5 中通过一些只有 JavaScript 内部才会使用到的特性 (attribute) 来描述属性 (property) 的各种特征。这些特性 (attribute) 是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问他们。为了表示特性 (attribute) 是内部值，规范把它们放在了两对方括号中，如 `[[Enumerable]]`。

## 数据属性

所谓的数据属性，即对象中包含数据值的属性，如：

```js
const person = {
  name: 'Allan'
}
```

上面的例子中，对象 person 中的 name 属性就是数据属性。

数据属性有 4 个描述其行为的特性 (attribute)：

- `[[Configurable]]` attribute：
  - 表示能否通过 delete 删除属性 (property) 从而重新定义属性 (property)。
  - 表示能否修改属性的特性 (attribute)。
  - 表示能否把属性修改为访问器属性。
- `[[Enumerable]]` attribute：表示能否通过 `for-in` 循环返回该属性。
- `[[Writable]]` attribute：表示否能修改属性的值。
- `[[Value]]` attribute：包含这个属性的数据值。
  - 读取属性值的时候，从这个位置读取。
  - 写入属性值的时候，把新值保存在这个位置。
  - 这个 attribute 的默认值为 `undefined`。

直接在对象上定义的属性，它们的 `[[Configurable]]`、`[[Enumerable]]` 和 `[[Writable]]` 特性都被设置为 `true`，而 `[[Value]]` 特性被设置为指定的值。

### 特性设置方式

我们知道了这些描述对象 property 特征的 attributes 的存在，那么这些 attributes 要通过什么方式来设置？

设置这些 attributes 就需要使用 [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 这个方法。

## 访问器属性

访问器属性不包含数值，它包含一对 `getter` 和 `setter` 函数，这两个函数无需同时存在：

- 在读取访问器属性时，会调用 `getter` 函数，这个函数负责返回有效值。
- 在写入访问器属性时，会调用 `setter` 函数并传入新值，这个函数负责决定如何处理数据。

访问器属性有 4 个描述其行为的特性 (attribute)：

- `[[Configurable]]`：
  - 表示能否通过 `delete` 删除属性从而重新定义属性
  - 表示能否修改属性的特性，
  - 表示能否把属性修改为数据属性。
- `[[Enumerable]]`：表示能否通过 `for-in` 循环返回属性。
- `[[Get]]`：在读取属性时调用的函数。默认值为 `undefined`。
- `[[Set]]`：在写入属性时调用的函数。默认值为 `undefined`。

访问器属性不能直接定义，必须使用 `Object.defineProperty()` 来定义：

```js
var book = {
  _year: 2004,
};

Object.defineProperty(book, "year", {
  get: function(){
    return this._year;
  },
  set: function(newValue){
    if (newValue > 2004) {
        this._year = newValue;
    }
  }
});

book.year = 2005;
alert(book.edition);  // 2
```

上面的例子中，是一个简单的访问器属性的使用例子。

例子中声明了一个 `book` 对象，并且给这个 `book` 对象创建了一个 `year` 访问器属性。当直接访问 `book.year` 的时候，返回的是对象的 `_year` 属性的值。当直接给 `book.year` 赋值的时候，如果所赋的值大于 2004，则将值赋值给 `book._year`。

## 定义多个属性

前面在使用 `Object.defineProperty()` 的时候，无论定义数据属性还是访问器属性，一次仅仅只能定义一个属性。而如果想同时定义多个属性，可以使用 `Object.defineProperties()` 方法。

```js
var book = {};

Object.defineProperties(book, {
  _year: {
    writable:true,
    value: 2004
  },

  edition: {
    writable:true,
    value: 1
  },

  year: {
    get: function(){
      return this._year;
    },

    set: function(newValue){
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});
```

## 读取属性的特性

想要读取属性 (property) 的特性 (attribute)，可以使用 `Object.getOwnPropertyDescriptor()`，它会返回包含属性 attributes 的对象。

如果是访问器属性，返回的对象属性有 `configurable`、`enumerable`、`get` 和 `set`。

如果是数据属性，这个对象的属性有 `configurable`、`enumerable`、`writable` 和 `value`。

```js
var book = {};

Object.defineProperties(book, {
  _year: {
    value: 2004
  },

  edition: {
    value: 1
  },

  year: {
    get: function () {
      return this._year;
    },

    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);         //2004
alert(descriptor.configurable); //false
alert(typeof descriptor.get);    //"undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);        //undefined
alert(descriptor.enumerable);   //false
alert(typeof descriptor.get);   //"function"
```
