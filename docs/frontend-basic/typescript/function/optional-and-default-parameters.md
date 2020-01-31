# 可选参数与默认参数

在 TypeScript 中，函数的每一个参数都被认为是必须的。但这并不意味着不能给参数传 `null` 或者 `undefined`。当函数被调用的时候，编译器会检查用户是否为每一个参数都提供了值，因此在调用函数时所传的参数数量需要与函数需要的参数数量相匹配。

```ts
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

在 JavaScript 中，函数的每一个参数都是可选的，用户可以视情况不给某些参数赋值。当这么做的时候，没有传值的参数它的值为 `undefined`。在 TypeScript 中，如果我们想定义可选参数，那么可以在可选参数的后面添加一个 `?`。例如我们将前面的例子中的函数最后一个参数改为可选参数：

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

需要注意的是，所有的可选参数都必须跟在必须参数之后。

在 TypeScript 中，我们也可以给参数设置默认值，当用户没有给参数提供值或者用户传了一个 `undefined`，那么默认值将生效：

```ts
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

如果带有默认值的参数在所有必须参数之后，则它与可选参数类似，在调用参数的时候都可以忽略不传。这意味着这两种参数在类型上有共同之处：

```ts
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

```ts
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

上面两个函数声明都有相同的类型声明：`(firstName: string, lastName?: string) => string`。在函数类型声明中默认值并没有体现出来，仅保留了它是可选参数的信息。

与普通的可选参数不同，带有默认值的参数并不需要出现在必选参数之后。如果带有默认值的参数在可选参数之前，那么用户必须向带有默认值的参数传递 `undefined` 才能获取到默认值：

```ts
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
```
