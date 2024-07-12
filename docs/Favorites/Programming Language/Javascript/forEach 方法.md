# JavaScript `forEach` 方法详解

`forEach` 是一种常见的数组迭代方法，它同样存在于 `Map` 和 `Set` 数据结构中。本笔记将聚焦于 `forEach` 的回调函数参数以及如何使用 `thisArg`。

## 回调函数参数

`forEach` 方法的核心在于它的回调函数，该函数在数组、`Map` 或 `Set` 的每个元素上被调用一次。回调函数的参数如下：

### 数组的 `forEach`

-   **`item`** (`element`): 当前元素的值。
-   **`index`**: 当前元素在数组中的索引。
-   **`array`**: 正在遍历的数组本身。

示例：

```javascript
[1, 2, 3].forEach((item, index, array) => {
    console.log(`Element at index ${index}: ${item}`);
});
```

### `Map` 的 `forEach`

-   **`value`**: 键对应的值。
-   **`key`**: 当前迭代的键。
-   **`map`**: 正在遍历的 `Map` 对象。

示例：

```javascript
new Map([
    ["a", 1],
    ["b", 2],
]).forEach((value, key, map) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
```

### `Set` 的 `forEach`

-   **`value`**: 当前迭代的值（与键相同，因为 `Set` 只存储值）。
-   **`_`**: 第二个参数在 `Set` 的 `forEach` 中通常不使用。
-   **`set`**: 正在遍历的 `Set` 对象。

示例：

```javascript
new Set([1, 2, 3]).forEach((value, _, set) => {
    console.log(`Value: ${value}`);
});
```

## 使用 `thisArg`

除了回调函数，`forEach` 方法还允许传递一个可选的第二个参数——`thisArg`。`thisArg` 指定回调函数执行时 `this` 关键字的值。

在没有明确指定 `thisArg` 时，`this` 在严格模式下默认为 `undefined`，而非严格模式下可能为全局对象（例如，浏览器中的 `window`）。

### 为什么使用 `thisArg`

`thisArg` 特别有用，当你需要在回调函数中访问某个对象的方法或属性时。通过设定 `thisArg`，你可以确保 `this` 指向期望的对象，从而能够正确访问其成员。

示例：

```javascript
class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }

    log(message) {
        console.log(`${this.prefix}: ${message}`);
    }
}

const logger = new Logger("Info");
const items = [1, 2, 3];

items.forEach(function (item) {
    this.log(`Processing item: ${item}`);
}, logger);
```
