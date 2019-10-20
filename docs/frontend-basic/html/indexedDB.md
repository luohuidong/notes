# IndexedDB

IndexedDB 给我们提供了一种在本地存储大量数据的方式。

使用 IndexedDB 与使用 XHR 很类似，大多数操作都是异步的，都是先请求，然后通过事件回调获取结果。

## 使用 IndexedDB 的基本模式

1. 打开数据库 (database)。
2. 创建对象存储 (object store)。
3. 创建一个事务 (transaction)，并生成操作数据库的请求 (request)，如添加和获取数据。
4. 通过监听 DOM 事件来等待操作的完成。
5. 对结果进行处理。

## 打开数据库

通过下面的代码，可以请求打开数据库。

```js
var request = window.indexedDB.open("MyTestDatabase", 3);
```

`open()` 的第一个参数为数据库的名称，第二个参数为数据库的版本号。

使用 `open()` 方法可以创建打开数据库请求，但是它并不会立即打开数据库，而是会返回一个 `IDBOpenDBRequest` 对象。

通过处理 `IDBOpenDBRequest` 对象的 `onsuccess` 事件或者 `onerror` 事件，可以获取打开数据库的结果或者错误信息。

`open()` 的第二个参数决定数据库的 `schema`，即数据库中的 `object stores` 以及这个 `object stores` 的结构。如果数据库不存在，则通过 `open` 操作创建，随后触发 `IDBOpenDBRequest` 对象的 `onupgradedneeded` 事件。如果数据库存在，但是更新了数据库的版本号，同样会触发 `onupgradedneeded` 事件。数据库 `schema` 更新一般会在 `onupgradedneeded` 事件回调中处理。

### 事件处理

对于大多数请求来说，最常处理的就是成功事件以及错误事件：

```js
request.onerror = function(event) {
  // Do something with request.errorCode!
};
request.onsuccess = function(event) {
  // Do something with request.result!
};
```

如果一切都成功的话，那么将触发 `onsuccess` 事件，`event` 事件对象的 `type` 属性值将设置为 `"success"`。
