# Reflect

`Reflect`是一个内置的对象，它提供了一组静态方法，用于直接操作和检查对象。与`Proxy`对象一起使用时，`Reflect`方法经常作为默认行为的替代方案出现。`Reflect`方法与`Proxy`的陷阱（handler traps）相对应，使得你可以直接调用这些方法来模拟或替换`Proxy`中的相应行为。

## 为什么使用 Reflect

-   **避免不正确的 `this` 绑定**:
    在一些场景中，如事件处理器或回调函数内，直接操作对象可能因 `this` 上下文的丢失而导致意外的行为。`Reflect` 方法通常能更准确地处理 this 的绑定，确保方法调用和属性访问按预期工作。
-   **处理原型链上的属性**:
    直接访问或修改对象的属性（如 `obj[prop]`）可能无法正确处理原型链上的属性。`Reflect.get` 和 `Reflect.set` 等方法能够更准确地在原型链上查找和操作属性。
-   **属性描述符问题**:
    直接操作属性可能忽视了属性的描述符（如可枚举性、可配置性和可写性）。`Reflect` 方法，如 `Reflect`.`getOwnPropertyDescriptor` 和 `Reflect.defineProperty`，允许更精细地控制属性的这些特性。
-   **支持现代特性**:
    随着 ECMAScript 的演进，新的特性如私有字段和类字段被引入。直接操作可能无法正确处理这些特性，而 `Reflect` 提供了对这些现代特性的支持。
-   **元信息和调试**:
    `Reflect` 方法可以提供关于操作的更多信息，这对于调试和理解代码的运行时行为非常有用。例如，`Reflect.apply` 可以返回函数调用的结果，这在调试时很有帮助。

## 关键的 Reflect 方法示例

1. `Reflect.get(target, propertyKey[, receiver])`: 获取对象的属性值。
2. `Reflect.set(target, propertyKey, value[, receiver])`: 设置对象的属性值。
3. `Reflect.has(target, propertyKey)`: 检查对象是否具有某个属性。
4. `Reflect.deleteProperty(target, propertyKey)`: 删除对象的属性。
5. `Reflect.construct(target, argumentsList[, newTarget])`: 创建一个新对象，使用指定的构造函数。
6. `Reflect.apply(target, thisArgument, argumentsList)`: 调用函数。
7. `Reflect.defineProperty(target, propertyKey, attributes)`: 定义对象的属性。
8. `Reflect.construct(constructor, args[, newTarget])`: 创建一个新对象，使用指定的构造函数。

## 为什么 JavaScript 没有将 Reflect 设为默认操作

JavaScript 的设计者没有将 `Reflect` 设为默认操作，主要原因如下：

1. **兼容性**: JavaScript 语言设计时已存在大量代码依赖于直接操作符。将`Reflect`设为默认操作会破坏现有代码库的兼容性，造成迁移成本。
2. **代码可读性**: 使用直接操作符通常使代码更简洁，更容易阅读和理解。`Reflect` 方法可能需要更复杂的参数列表和调用，增加了代码的复杂度。
3. **性能**: `Reflect` 方法的调用会比直接操作符慢，因为需要额外的函数调用和参数传递。

## 示例

```javascript
class MyClass {
    constructor() {
        this._value = 42;
    }
    get myValue() {
        return this._value;
    }
}
const obj = new MyClass();

const proxyObj = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(`Accessing ${key} on target`);
        return Reflect.get(target, key, receiver);
    },
});
console.log(proxyObj.myValue); // 输出: Accessing myValue on target, Accessing _value on target, 42

const proxyObj2 = new Proxy(obj, {
    get(target, key) {
        console.log(`Accessing ${key} on target`);
        // 直接访问target[key]，这将跳过getter
        return target[key];
    },
});
// 直接访问target[key]，将跳过getter，获取到原始属性值。
console.log(proxyObj2.myValue); // 输出: Accessing myValue on target, 42
```

当在 `Proxy` 的处理程序中追踪副作用函数或依赖关系，以实现如响应式系统中的数据变化检测等特性时，采用 `Reflect.get` 方法是至关重要的。直接访问 `target[key]` 虽然看似简洁，但它未能建立起属性访问与副作用函数之间的响应式联系，从而导致诸如更新通知、依赖收集等机制失效。
