# Ambient enums

Ambient enums are used to describe the shape of already existing enum types.

```ts
declare enum Enum {
  A = 1,
  B,
  C = 2
}
```

One important difference between ambient and non-ambient enums is that, in regular enums, members that don’t have an initializer will be considered constant if its preceding enum member is considered constant. In contrast, an ambient (and non-const) enum member that does not have initializer is always considered computed.
