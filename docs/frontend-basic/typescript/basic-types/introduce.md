# 基本类型介绍

在了解 TypeScript 中的数据类型之前，先回顾一下 ECMAScript 中的数据类型。ECMAScript 有两种不同的数据类型：基本类型与引用类型。

在 ES5 中，一共有 5 中基本数据类型，分别为：

- Undefined
- Null
- Boolean
- Number
- String

而引用类型为以下几种：

- Object 类型
- Array 类型
- Function 类型

在 ES6 中，新增了第 6 个基本类型：Symbol。

TypeScript 为 ECMAScript 的超集，自然而然囊括了上面的所有类型，并且在此基础上还进行了类型扩展，例如 `void`、`any`、`never`、元组、枚举、高级类型等等。

在介绍 TypeScript 的数据类型之前，了解一下“类型注解”这个概念，它相当于强类型语言中的类型声明，对变量起到一个约束的作用。其形式为 `(变量/函数):type`。
