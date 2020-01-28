# Classes（类类型的兼容性）

`Class` 类型的兼容性与对象字面量类型、接口类型是非常相似了。但有一点除外：它既有静态类型也有实例类型。**当比较两个对象的 `class` 类型兼容性的时候，只比较实例成员。静态成员以及构造函数并不会对兼容性有任何影响。**

```typescript
class Dog {
  leg = 4
  static eat() {}

  constructor(name: string) {}
}

class Cat {
  leg = 2
  static run() {}

  constructor(age: number, name: string) {}
}

let dog = new Dog('BabyDog')
let cat = new Cat(2, 'BabyCat')

dog = cat
cat = dog
```

## 私有成员与受保护成员对兼容性的影响

由于比较两个对象的 `class` 类型兼容性的时候，需要比较实例成员。在 TypeScript 中，类中定义的实例成员默认为共有成员，而实例中除了公有成员之外，还可能会有私有成员以及受保护成员，因此在考虑对象 `class` 类型兼容性的时候，这两类成员都需要考虑在内。

类的私有成员和受保护成员会影响到兼容性。当在检查一个类实例的兼容性的时候，如果目标类型包含私有成员或者受保护成员，那么源类型中必须包含来自同一个类的私有成员或者受保护成员。下面以私有成员来举例子：

```ts
class Animal {
  private leg: number
  constructor(leg: number) {
    this.leg = leg
  }
}

class Dog {
  private leg: number
  constructor(leg: number) {
    this.leg = leg
  }
}

let animal: Animal = new Dog(2) // Error!
// Type 'Dog' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'leg'.
```

由于 `Dog` 类型自己定了一个私有变量 `leg` 不是从 `Animal` 中继承，因此 `Dog` 的实例并不能赋值给类型为  `Animal` 的 `animal` 变量。

如果想 `Dog` 的实例能够赋值给 `animal`，则 `Dog` 继承 `Animal` 即可：

```ts
class Animal {
  private leg: number
  constructor(leg: number) {
    this.leg = leg
  }
}

class Dog extends Animal {
  constructor(leg: number) {
    super(leg)
  }
}

let animal: Animal = new Dog(2) // OK!
```

类中


