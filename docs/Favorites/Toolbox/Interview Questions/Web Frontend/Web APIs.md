# Web APIs

## DOM 操作方法

DOM（Document Object Model）是一种用于表示和操作 HTML 和 XML 文档的 API。在 JavaScript 中，可以使用 DOM 操作方法来创建、修改和删除 HTML 元素和属性。
以下是一些常用的 DOM 操作方法：

1.  createElement(tagName)：创建一个指定标签名的 HTML 元素节点。
    ```javascript
    let div = document.createElement("div");
    ```
2.  createTextNode(text)：创建一个包含指定文本内容的文本节点。
    ```javascript
    let textNode = document.createTextNode("Hello, world!");
    ```
3.  appendChild(node)：将一个节点添加到另一个节点的子节点列表的末尾。
    ```javascript
    let parent = document.getElementById("parent");
    let child = document.createElement("div");
    parent.appendChild(child);
    ```
4.  insertBefore(newNode, referenceNode)：将一个节点插入到另一个节点的子节点列表中，插入到参考节点之前。
    ```javascript
    let parent = document.getElementById("parent");
    let child = document.createElement("div");
    let referenceNode = document.getElementById("reference");
    parent.insertBefore(child, referenceNode);
    ```
5.  removeChild(node)：从一个节点的子节点列表中删除一个节点。
    ```javascript
    let parent = document.getElementById("parent");
    let child = document.getElementById("child");
    parent.removeChild(child);
    ```
6.  setAttribute(name, value)：为一个 HTML 元素设置一个属性。
    ```javascript
    let element = document.getElementById("element");
    element.setAttribute("class", "my-class");
    ```
7.  getAttribute(name)：获取一个 HTML 元素的指定属性的值。

        ```javascript
        let element = document.getElementById("element");
        let className = element.getAttribute("class");
        ```

DOM 操作方法可以帮助开发者动态地创建、修改和删除 HTML 元素和属性，实现动态的页面效果和交互。但是，频繁的 DOM 操作可能会影响页面的性能，因此需要谨慎使用。

## `DOMContentLoaded`

`DOMContentLoaded`事件：这是一个事件，表示文档已经完成加载，并已被浏览器解析为一个 DOM 树。这意味着此时可以安全地查询和操作 DOM 元素，而不用担心某些元素还没有被加载或解析。

## sessionStorage & localStorage

1. sessionStorage
   生命周期：sessionStorage 的数据仅在当前浏览器窗口或标签页的生命周期内有效。当用户关闭该窗口或标签页时，数据会被清除。
   同域名下页面跳转：
   当前窗口/标签页内跳转：正如您所述，如果是同域名下的页面间跳转（例如通过链接点击或 JavaScript 导航），sessionStorage 的值会保留。
   新开标签页：如果从当前页面新开一个同域名下的标签页，sessionStorage 不会共享。每个标签页有自己的独立 sessionStorage，所以新开的标签页中 sessionStorage 是空的。
   跨域名情况：即使是从当前页面跳转到不同域名下的页面，sessionStorage 的数据也不会被带过去，因为它是基于当前浏览器窗口且限于同一源策略的。
2. localStorage
   生命周期：localStorage 提供了更为持久的数据存储方式，除非主动删除数据或使用浏览器的清除浏览数据功能，否则数据会一直保存。
   同域名下页面跳转与新开标签页：无论是当前窗口/标签页内跳转还是新开同域名下的标签页，localStorage 中的数据都会被保留并可以访问。因为它不依赖于特定的浏览器窗口或标签页。
   跨域名情况：同样，localStorage 也受到同源策略限制，不同域名之间不能直接访问对方的 localStorage 数据。

总结
sessionStorage 适用于需要在单个浏览器会话期间临时存储数据的场景，适合敏感信息存储，因为它不跨窗口或标签页共享，且会话结束即清除。
localStorage 则适用于需要长期存储、跨窗口或标签页共享但仍然限于同一源的数据存储需求。

## MutationObserver

`MutationObserver` 是 JavaScript 中一个用于观察 DOM 树变化的 API。当你创建一个 `MutationObserver` 实例并传入一个回调函数时，这个回调函数会成为 `MutationObserver` 的监听器。

每当 DOM 树中被观察的部分发生变化时，这个回调函数就会被调用，接收一个 `MutationRecord` 类型的数组作为参数。这个数组包含了描述所有变化的记录。

回调函数的签名通常如下：

```javascript
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
            console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
            console.log("The " + mutation.attributeName + " attribute was modified.");
        }
    }
};
const observer = new MutationObserver(callback);
// 配置观察选项
const config = { attributes: true, childList: true, subtree: true };
// 选择要观察的节点
const targetNode = document.getElementById("someElement");
// 开始观察目标节点
observer.observe(targetNode, config);
```

-   `mutationList` 是一个 `MutationRecord` 对象的数组，每个 `MutationRecord` 对象描述了一次具体的 DOM 变化。
-   `observer` 是触发回调的 `MutationObserver` 实例本身。

`MutationRecord` 对象包含有关变化的具体信息，如变化的类型（`type`），受影响的节点（`target`），以及变化前后的情况（如旧值和新值）。

在这个例子中，`callback` 函数会在观察的目标节点 `someElement` 发生变化时被调用，无论是节点的子元素列表变化，还是节点的属性变化。
