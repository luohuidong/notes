# Rest 参数

必须参数、可选参数、有默认值的参数这三种参数都有一个共同点：他们一次只能定义一个参数。有时候我们可能想将多个参数作为一个整体来进行处理，或者我们并不知道函数到底会被传进来多少个参数。在 JavaScript 中，我们可以 `arguments` 变量来访问函数的所有参数，但是 `arguments` 仅在函数体内生效。

在 TypeScript 中，你可以将这些参数集中到一个变量中：

```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

Rest 参数被视为无数个可选参数。当给 rest 参数传递参数的时候，我们可以传我们所需要的数量的参数，甚至可以一个都不传。编译器会构建一个数组，数组会包含所有向 rest 参数传递的参数。这个数组可以通过紧跟 `...` 后面的变量名访问。

另外 `...` 也会在函数类型中 rest 参数的声明中使用到：

```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```


