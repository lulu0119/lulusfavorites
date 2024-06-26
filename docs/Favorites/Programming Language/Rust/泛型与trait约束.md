# Rust 泛型与 Trait 约束学习笔记

## 泛型与约束

-   **泛型函数定义**：通过 `<T>` 指定泛型参数，使函数能处理多种类型。

```Rust
fn get_sum_gen<T:Add<Output = T>>(x: T, y: T) -> T {
    x + y
}
```

-   **泛型约束**：`<T:Add<Output = T>>` 表示类型 `T` 必须实现了 `std::ops::Add trait`，并且加法操作的结果类型也是 `T`。这确保了类型 `T` 支持加法操作且操作结果类型与输入类型一致。

## 类型转换与所有权

-   **`to_string` vs `to_owned`**:
    -   `to_string()`：将实现了 `Display` trait 的类型转换为 `String`，即使源已经是 `String`，也会复制内容到新分配的内存。
    -   `to_owned()`：常用于 `Borrow` trait 上下文，对 `Clone` 类型创建拥有所有权的副本。对 `String` 类型，效果等同于 `to_string()`。

## 类型系统概念

-   **`Display` trait**：定义了类型的可显示格式，用于格式化输出。
-   **`Borrow` trait**：允许类型借出一个简化的引用视图，如 `String` 可以借出 `&str`。

## 类型判断与转换注意事项

-   **处理不同类型的加法**：直接使用 `get_sum_gen` 无法处理不同类型的参数，因为要求类型一致且遵循同质加法规则。对于异构类型操作，需考虑类型转换或定义特定函数处理。
