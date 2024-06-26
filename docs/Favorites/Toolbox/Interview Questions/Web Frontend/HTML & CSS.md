# HTML & CSS

## 盒模型

CSS 中的盒模型是用来描述元素在页面布局中所占空间的模型。每个 HTML 元素都被表示为一个矩形的盒子，这个盒子由内容区域、内边距、边框和外边距组成。
盒模型的组成部分包括：

1. 内容区域（Content）：由元素的内容所占据的区域，可以通过设置 width 和 height 属性来控制。
2. 内边距（Padding）：内容区域与边框之间的空白区域，可以通过设置 padding 属性来控制。
3. 边框（Border）：内边距外部的边框，可以通过设置 border 属性来控制。
4. 外边距（Margin）：边框外部的空白区域，可以通过设置 margin 属性来控制。

在标准的盒模型中，元素的宽度和高度指的是内容区域的宽度和高度，而内边距、边框和外边距会增加元素所占据的空间。这意味着，如果设置了元素的宽度和高度，实际占据的空间会包括内容区域、内边距、边框和外边距。
在 CSS 中，可以通过 box-sizing 属性来控制盒模型的计算方式，包括 content-box（默认值，宽度和高度只包括内容区域）、border-box（宽度和高度包括内容区域、内边距和边框）等。

盒模型是 CSS 布局的基础，了解盒模型可以帮助开发者更好地控制元素在页面中的布局和空间占用。

## 选择器优先级

CSS 选择器优先级是用于确定当多个选择器作用于同一元素时，哪一个选择器的样式将被应用的规则。CSS 选择器优先级由四个部分组成：行内样式、ID 选择器、类选择器和标签选择器。

1. 行内样式：具有最高的优先级，会覆盖其他任何类型的样式。
2. ID 选择器：具有比类选择器和标签选择器更高的优先级。
3. 类选择器：优先级低于 ID 选择器，但高于标签选择器。
4. 标签选择器：优先级最低，会被其他类型的选择器所覆盖。

在计算选择器优先级时，可以使用以下规则：

1. 行内样式的优先级为 1000。
2. 每个 ID 选择器的优先级为 100。
3. 每个类选择器、属性选择器或伪类的优先级为 10。
4. 每个元素选择器、伪元素选择器的优先级为 1。

如果有多个选择器作用于同一元素，浏览器会根据这些规则计算它们的优先级，并应用具有最高优先级的样式。
需要注意的是，当优先级相同时，后定义的样式会覆盖先定义的样式。

此外，使用!important 关键字可以将样式的优先级提升到最高，但应该谨慎使用，因为它可能导致样式不易维护和调试。

了解 CSS 选择器优先级可以帮助开发者更好地管理样式，避免样式冲突和提高样式的可维护性。

## Flexbox 布局和 Grid 布局

Flexbox 布局和 Grid 布局是 CSS 中两种常用的布局方式，它们都可以用于实现响应式布局和灵活的页面设计。

1. Flexbox 布局：Flexbox 布局是一种基于弹性盒子模型的布局方式，可以实现灵活的、自适应的页面布局。Flexbox 布局通过设置容器和子元素的属性来控制元素的排列和对齐方式，包括 flex-direction、justify-content、align-items 等属性。Flexbox 布局适用于一维布局，比如导航栏、列表等。
2. Grid 布局：Grid 布局是一种基于网格的布局方式，可以实现复杂的、多维的页面布局。Grid 布局通过设置网格容器和网格项的属性来控制元素的排列和对齐方式，包括 grid-template-columns、grid-template-rows、grid-column、grid-row 等属性。Grid 布局适用于二维布局，比如网格布局、表格等。

总的来说，Flexbox 布局和 Grid 布局是 CSS 中两种常用的布局方式，它们都具有灵活性、可读性、可维护性和响应式等优点，可以帮助开发者更好地实现页面布局和设计。

## BEM 命名规范

BEM（Block Element Modifier）是一种 CSS 命名规范，旨在提高 CSS 代码的可读性、可维护性和可扩展性。BEM 将 CSS 选择器分为三个部分：块（Block）、元素（Element）和修饰符（Modifier）。

1. 块（Block）：块是一个独立的、可重用的组件，它可以包含一个或多个元素。块的命名应该使用单词或短语，使用连字符（-）分隔单词，比如 header、menu、button 等。
2. 元素（Element）：元素是块的一部分，用于描述块的组成部分。元素的命名应该使用块名作为前缀，使用双下划线（**）分隔块名和元素名，比如 menu**item、button\_\_icon 等。
3. 修饰符（Modifier）：修饰符用于描述块或元素的状态或变化。修饰符的命名应该使用块名或元素名作为前缀，使用双连字符（--）分隔前缀和修饰符名，比如 button--disabled、menu\_\_item--active 等。

BEM 命名规范的优点在于它可以提高 CSS 代码的可读性和可维护性，使得代码更加清晰和易于理解。BEM 还可以帮助开发者更好地组织和管理 CSS 代码，避免样式冲突和提高代码的可扩展性。

总的来说，BEM 命名规范是一种常用的 CSS 命名规范，它可以帮助开发者更好地组织和管理 CSS 代码，提高代码的可读性、可维护性和可扩展性。

## 什么是浮动？如何清除浮动？

浮动是指在网页布局中，元素脱离文档流并向左或向右移动，直到其外边缘碰到包含块的边缘或者另一个浮动元素的边缘为止。浮动通常用于实现文字环绕图片、多栏布局等效果。

清除浮动是指在浮动元素后面的元素中，通过一些技术手段来清除浮动所带来的影响，以保证页面布局的正确性和一致性。常见的清除浮动的方法包括：

1. 使用 clear 属性：在浮动元素的父元素或者浮动元素后面的元素中，添加 clear 属性，可以清除浮动的影响。例如，可以在浮动元素后面的元素中添加 clear: both;，来清除浮动的影响。

2. 使用伪元素清除浮动：通过在浮动元素后面的元素中添加伪元素，并设置 clear 属性来清除浮动。例如，可以在浮动元素后面的元素中添加如下样式：
    ```css
    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }
    ```
3. 使用 overflow 属性：在浮动元素的父元素中添加 overflow 属性，可以清除浮动的影响。例如，可以在浮动元素的父元素中添加 overflow: hidden;，来清除浮动的影响。

这些方法可以帮助开发者清除浮动所带来的影响，确保页面布局的正确性和一致性。

## link 和 @import

<link>标签是HTML中的一个标签，用于在HTML文档中引入外部样式表。

```html
<link rel="stylesheet" type="text/css" href="styles.css" />
```

它可以同时加载多个外部样式表，并且可以指定样式表的关系。而@import 规则是 CSS 中的一种规则，用于在一个 CSS 文件中引入另一个 CSS 文件。

@import 规则只能在 CSS 文件中使用，不能在 HTML 中使用，它必须写在样式表的顶部。

```css
@import url("styles.css");
```

在实际应用中，一般推荐使用<link>标签来引入外部样式表，因为它更加灵活、可靠，并且不会影响页面加载速度。

## z-index 属性失效

在 CSS 中，z-index 属性控制元素的堆叠顺序，即元素在层叠上下文中的显示顺序。然而，z-index 属性可能会在以下情况下失效：

1. 没有定位属性：z-index 属性只对定位（position）属性值为 relative、absolute、fixed 的元素有效。如果一个元素没有设置定位属性，z-index 将不会生效。
2. 父元素的 z-index 值：如果一个元素的 z-index 值被其父元素的 z-index 值所覆盖，那么子元素的 z-index 将会失效。在层叠上下文中，子元素的 z-index 值受限于父元素的 z-index 值。
3. 元素属于不同的层叠上下文：如果两个元素分别属于不同的层叠上下文，那么它们的 z-index 值将无法直接比较。在这种情况下，z-index 值的表现可能会出现意外的结果。

需要注意的是，z-index 属性的失效通常是由于层叠上下文的复杂性所导致的。在实际开发中，为了避免 z-index 失效，应该尽量避免过度依赖 z-index，合理规划文档流和层叠上下文，以确保 z-index 的正确表现。

## 单行文本溢出隐藏

要实现单行文本溢出隐藏，可以使用 CSS 的 text-overflow 属性和 overflow 属性。以下是一个简单的示例：

```html
<p class="single-line">
    这是一个单行文本溢出隐藏的示例，当文本内容超出指定宽度时，将会被隐藏并显示省略号。
</p>
```

```css
.single-line {
    white-space: nowrap; /* 禁止换行 */
    overflow: hidden; /* 溢出隐藏 */
    text-overflow: ellipsis; /* 文本溢出时显示省略号 */
    width: 200px; /* 设置元素宽度 */
}
```

在上面的示例中，通过设置 white-space 为 nowrap，禁止文本换行；设置 overflow 为 hidden，使得溢出部分的文本被隐藏；设置 text-overflow 为 ellipsis，当文本溢出时显示省略号。这样就可以实现单行文本溢出隐藏的效果。

## 实现一个模态对话框

### 编写一个 HTML 代码片段，实现以下功能，并解释关键部分

1. 页面上有一个按钮，文本为“弹窗”。
2. 点击按钮后，弹出一个模态对话框（modal dialog）显示信息：“this is a window”，并包含一个文本输入框。
3. 对话框内还有一个按钮，用于关闭该对话框。

请提供代码实现，并简要说明各部分代码的作用。

### 回答

```html
<body>
    <!-- 按钮触发弹窗 -->
    <button onclick="dog.showModal()">弹窗</button>

    <!-- 定义模态对话框，id为'dog' -->
    <dialog id="dog">
        <p>this is a window</p>
        <input type="text" />
        <!-- 关闭按钮，点击后调用dog.close()方法关闭对话框 -->
        <p><button onclick="dog.close()">关闭</button></p>
    </dialog>
</body>
```

### 核心要点总结

在 HTML 中，元素的 `id` 属性不仅作为标识符，还会使其变为全局 `window` 对象的属性，故可通过 `id` 名直接在 JS 中调用，如 `dog.showModal()`和 `dog.close()`。

此机制允许直接利用 HTML5 `<dialog>`元素内置的 `showModal()`和 `close()`方法来控制对话框的显示与隐藏，无须使用 `document.querySelector` 等方法进行元素选取，简化了代码实现。

但此做法可能引发全局命名冲突等问题，现代实践中推荐权衡利弊后使用。
