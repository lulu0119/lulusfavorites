# Rust vs Go 错误处理机制对比

Go 玩家床头放两个杯子，一个有水，一个空的。Rust 玩家不解，Go 玩家解释：万一哪天醒来不想喝水。

## Go 语言的错误处理

-   **多值返回**：Go 中函数常返回两个值，一个是业务数据，另一个是错误（`error` 类型）。

    ```Go
    func someFunction() (int, error) {
        // ...函数实现...
        if somethingWentWrong {
            return 0, errors.New("something went wrong")
        }
        return 42, nil
    }
    result, err := someFunction()
    if err != nil {
        // 处理错误
    } else {
        // 使用 result
    }
    ```

-   **设计哲学**：Go 鼓励开发者显式处理错误，但这种机制可能导致错误被无意间忽略。

## Rust 语言的错误处理

-   **`Result`类型**：Rust 使用`Result<T, E>`枚举类型，其中 `T` 是成功时返回的数据类型，`E` 是错误类型。

    ```Rust
    fn some_function() -> Result<T, E> {
        // ...函数实现...
        if something_went_wrong {
            Err(E::new("something went wrong"))
        } else {
            Ok(value)
        }
    }
    // 模式匹配
    match some_function() {
        Ok(result) => {
            // 使用 result
        },
        Err(e) => {
            // 处理错误 e
        }
    }
    // 链式调用，如果函数返回 Err，程序将panic并显示错误信息，在生产环境中应谨慎使用
    let result = some_function().expect("something went wrong");
    ```

-   **设计哲学**：Rust 的设计哲学强调在编译时捕捉尽可能多的错误，确保程序的健壮性和安全性。

## 关键区别

-   **Go**：允许错误被忽略，多值返回机制。
-   **Rust**：强制错误处理，使用 `Result` 类型和模式匹配确保所有错误路径都被覆盖。
