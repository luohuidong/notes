# Interface 简单例子

我们可以通过一个简单的例子来了解 Interface 是如何工作的。

```ts
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

类型检查器会检查 `printLabel` 的调用。`printLabel` 函数有一个参数，该参数为一个对象，这个对象需要一个 `string` 类型的 `label` 属性。需要注意的是，在调用 `printLabel` 的时候，我们所传递的参数对象中包含的属性比我们所定义需要的对象的属性要多，但是类型检查器仅仅只检查我们所传递的对象是否包含所需的属性以及该属性的类型是否与我们所定义的匹配。


