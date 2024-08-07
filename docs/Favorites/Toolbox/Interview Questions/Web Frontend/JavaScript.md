# JavaScript

## 原型和原型链

JavaScript 中的原型（prototype）和原型链（prototype chain）是理解 JavaScript 面向对象特性的关键概念。

1. 原型（prototype）：每个 JavaScript 对象都有一个原型，它是一个指向另一个对象的引用。
2. 原型链（prototype chain）：原型链是由对象的原型组成的链式结构。

在 JavaScript 中，每个对象（除了 null）都有一个原型，可以通过**proto**属性来访问对象的原型。当访问对象的属性时，如果对象本身没有这个属性，JavaScript 会沿着原型链向上查找，直到找到对应的属性或者到达原型链的顶端。

原型和原型链是 JavaScript 中实现继承和属性查找的基础，它们使得 JavaScript 具有动态性和灵活性，同时也是 JavaScript 面向对象特性的核心。

## 闭包

在 JavaScript 中，闭包（Closure）是指一个函数可以访问并操作其外部函数作用域中的变量，即使外部函数已经执行完毕，这些变量仍然可以被内部函数访问和使用。

闭包的实现方式是在函数内部定义另一个函数，并返回该函数，这样就可以访问外部函数的变量。由于 JavaScript 中的函数是一等公民，可以作为参数、返回值或者赋值给变量，因此闭包可以用于实现一些高级的编程技巧，比如函数柯里化、模块化等。

闭包的优点是可以实现数据的封装和保护，避免变量污染和冲突。同时，闭包还可以实现函数的记忆化，提高函数的执行效率。
但是，闭包也有一些缺点，比如会占用内存空间，可能导致内存泄漏等问题。因此，在使用闭包时需要注意内存管理和性能优化。

总的来说，闭包是 JavaScript 中非常重要的一部分，它可以帮助开发者实现一些高级的编程技巧和优化，但也需要注意内存管理和性能优化等问题。

## this 关键字

在 JavaScript 中，this 关键字用于指向当前函数的执行上下文，它的值取决于函数的调用方式和上下文环境。
具体而言，this 关键字的值可以分为以下几种情况：

1. 全局上下文：在全局上下文中，this 指向全局对象（浏览器中为 window 对象，Node.js 中为 global 对象）。
2. 函数上下文：在函数上下文中，this 的值取决于函数的调用方式。如果函数作为普通函数调用，this 指向全局对象；如果函数作为对象的方法调用，this 指向该对象；如果函数使用 apply 或 call 方法调用，this 指向传入的第一个参数；如果函数使用 new 关键字调用，this 指向新创建的对象。
3. 箭头函数：在箭头函数中，this 的值取决于箭头函数定义时的上下文环境，而不是调用时的上下文环境。因此，箭头函数中的 this 通常指向定义时的外层作用域。

总的来说，this 关键字是 JavaScript 中非常重要的一部分，它可以帮助开发者实现一些高级的编程技巧和优化，但也需要注意函数的调用方式和上下文环境，避免出现意外的结果。

## ES6 新特性

ES6（ECMAScript 2015）是 JavaScript 的一个重要更新版本，引入了许多新特性和语法糖，以提高开发效率和代码质量。以下是 ES6 的一些主要新特性：

1. let 和 const：引入了块级作用域的 let 和 const 关键字，取代了 var，提供了更好的变量声明和管理方式。
2. 箭头函数：引入了箭头函数语法，简化了函数的定义和使用，同时改变了 this 的指向。
3. 模板字符串：引入了模板字符串，可以使用${}语法嵌入变量和表达式，提高了字符串的处理和拼接效率。
4. 解构赋值：引入了解构赋值语法，可以方便地从数组或对象中提取值并赋给变量。
5. 默认参数：函数参数可以设置默认值，简化了函数的定义和调用。
6. 扩展运算符：引入了扩展运算符（...），可以方便地将数组、对象等展开成参数序列或者合并成新的数组或对象。
7. 类和继承：引入了 class 关键字，提供了更加清晰和面向对象的语法糖，支持了更加直观的继承和构造函数定义。
8. Promise：引入了 Promise 对象，提供了更加优雅的异步编程方式，解决了回调地狱的问题。
9. 模块化：引入了 import 和 export 关键字，提供了更加清晰和模块化的代码组织方式。
10. 简化的对象字面量语法：引入了简化的对象字面量语法，可以更加简洁地定义对象的属性和方法。

这些新特性使得 ES6 成为了 JavaScript 中一个重要的里程碑，为开发者提供了更加现代化、高效和优雅的编程方式。

## Promise 和 async/await

Promise 是 JavaScript 中用于处理异步操作的对象，它代表了一个异步操作的最终完成或失败，并返回结果值。Promise 对象有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。

Promise 对象有两个重要的方法：then 和 catch。then 方法用于指定异步操作成功时的回调函数，catch 方法用于指定异步操作失败时的回调函数。

而 async/await 是 ES8（ECMAScript 2017）中引入的一种处理异步操作的语法糖，它基于 Promise 对象，提供了更加直观和优雅的异步编程方式。

async 函数用于定义一个返回 Promise 对象的异步函数，它内部可以使用 await 关键字来等待一个 Promise 对象的状态变更。await 关键字可以暂停 async 函数的执行，直到等待的 Promise 对象状态变为 fulfilled 或 rejected，然后返回该 Promise 对象的值。

async/await 的优点在于它可以让异步代码看起来更像同步代码，更加清晰和易于理解。它也可以更好地处理异步操作中的错误，使用 try/catch 语法捕获异步操作的异常。

总的来说，Promise 和 async/await 是 JavaScript 中用于处理异步操作的重要特性，它们提供了更加现代化、高效和优雅的异步编程方式，使得异步操作的处理更加直观和易于管理。

## 深拷贝和浅拷贝

在 JavaScript 中，深拷贝和浅拷贝是用于复制对象或数组的两种不同方式。

1. 浅拷贝（Shallow Copy）：浅拷贝是指创建一个新的对象或数组，新对象的属性值或数组元素是对原对象或数组中的值的引用。换句话说，浅拷贝只复制了对象或数组的第一层结构，而没有复制嵌套对象或数组的内容。在 JavaScript 中，可以使用 Object.assign()方法或展开运算符（...）来进行浅拷贝。
    ```javascript
    // 浅拷贝示例
    let original = { a: 1, b: { c: 2 } };
    let shallowCopy = Object.assign({}, original);
    // 或者
    let shallowCopy = { ...original };
    ```
2. 深拷贝（Deep Copy）：深拷贝是指创建一个新的对象或数组，新对象的属性值或数组元素是对原对象或数组中的值的完全复制，包括嵌套对象或数组的内容。在 JavaScript 中，实现深拷贝通常需要使用递归或第三方库，比如 Lodash 的\_.cloneDeep()方法。
    ```javascript
    // 深拷贝示例（使用Lodash）
    let original = { a: 1, b: { c: 2 } };
    let deepCopy = _.cloneDeep(original);
    ```
    深拷贝和浅拷贝的选择取决于具体的需求。浅拷贝通常更加高效，但在处理嵌套对象或数组时可能会出现意外的引用关系。而深拷贝可以完全复制对象或数组的所有内容，但可能会消耗更多的内存和计算资源。

## 事件委托（Event Delegation）

事件委托（Event Delegation）是一种利用事件冒泡机制的技术，通过将事件处理程序绑定到父元素上，来管理子元素上的事件。当子元素上的事件被触发时，事件会冒泡到父元素，然后由父元素上的事件处理程序来处理这个事件。
事件委托的作用包括：

1. 减少内存消耗：通过将事件处理程序绑定到父元素上，而不是每个子元素上，可以减少内存消耗，特别是在大量子元素存在的情况下。
2. 动态元素处理：对于动态添加的子元素，无需重新绑定事件处理程序，因为事件委托会自动处理这些新添加的子元素。
3. 简化代码：通过事件委托，可以减少重复的事件处理程序绑定代码，使代码更加简洁和易于维护。

实现事件委托的步骤如下：

1. 将事件处理程序绑定到父元素上，通常是使用 addEventListener 方法。
2. 在事件处理程序中，通过事件对象的 target 属性来判断事件的真正目标，即触发事件的子元素。
3. 根据子元素的特征或其他条件，执行相应的操作。

例如，假设有一个 ul 元素包含多个 li 元素，我们可以将事件处理程序绑定到 ul 元素上，然后通过判断事件对象的 target 属性来处理 li 元素上的事件。这样无论是现有的 li 元素还是将来动态添加的 li 元素，都可以通过事件委托来处理它们上面的事件。

## 常用数组方法

在 JavaScript 中，数组是一种常用的数据结构，它提供了许多原生方法来操作数组。

以下是一些常用的数组方法：

1. push()：向数组末尾添加一个或多个元素，并返回新的长度。
2. pop()：从数组末尾删除一个元素，并返回该元素的值。
3. shift()：从数组开头删除一个元素，并返回该元素的值。
4. unshift()：向数组开头添加一个或多个元素，并返回新的长度。
5. slice()：返回一个新的数组，包含原数组中指定的部分。
6. splice()：向/从数组中添加/删除元素，并返回被删除的元素。
7. concat()：返回一个新的数组，包含原数组和其他数组/值。
8. join()：将数组中的所有元素转换为字符串，并返回字符串。
9. indexOf()：返回指定元素在数组中第一次出现的位置，如果不存在则返回-1。
10. lastIndexOf()：返回指定元素在数组中最后一次出现的位置，如果不存在则返回-1。
11. forEach()：对数组中的每个元素执行一次指定的函数。
12. map()：返回一个新的数组，包含对原数组中的每个元素执行指定函数的结果。
13. filter()：返回一个新的数组，包含原数组中符合指定条件的元素。
14. reduce()：对数组中的每个元素执行指定的函数，返回一个累加的结果。
15. sort()：对数组中的元素进行排序，并返回排序后的数组。

这些方法可以帮助我们更方便地操作数组，提高开发效率。

## for...in 和 for...of 的区别

在 JavaScript 中，for...in 和 for...of 都是用于循环遍历数据结构的语句，但它们的用法和作用有所不同。

for...in 语句用于遍历对象的可枚举属性，例如对象的属性名。它的语法如下：

```javascript
for (variable in object) {
    // code to be executed
}
```

其中，variable 是一个变量，用于存储每个属性名，object 是要遍历的对象。在循环中，变量会依次存储对象的每个属性名，可以通过变量来访问属性的值。需要注意的是，for...in 循环不保证属性的顺序，因此不适用于对数组等有序数据结构的遍历。

for...of 语句用于遍历可迭代对象，例如数组、字符串、Map、Set 等。它的语法如下：

```javascript
for (variable of iterable) {
    // code to be executed
}
```

其中，variable 是一个变量，用于存储每个元素的值，iterable 是要遍历的可迭代对象。在循环中，变量会依次存储对象的每个元素的值，可以通过变量来访问元素的值。需要注意的是，for...of 循环保证元素的顺序，因此适用于对数组等有序数据结构的遍历。

总之，for...in 适用于遍历对象的属性名，而 for...of 适用于遍历可迭代对象的元素值。需要根据具体的需求选择合适的循环语句。

## typeof null

在 JavaScript 中，typeof null 的结果是 "object"。这可能会让人感到困惑，因为 null 实际上是一个原始值，而不是对象。

这个结果是由于 JavaScript 的历史遗留问题。在 JavaScript 的早期版本中，null 被错误地认为是对象的一种特殊类型。尽管后来这个错误被确认并记录下来，但为了保持向后兼容性，typeof null 仍然返回 "object"。

## isNaN 和 Number.isNaN

isNaN 函数在检查一个值是否为 NaN 时，会先尝试将该值转换为数值，然后再进行判断。

```javascript
isNaN("hello"); // true
```

Number.isNaN 函数不会进行类型转换，只有当传入的参数是数值类型，并且值为 NaN 时，才会返回 true。

```javascript
Number.isNaN("hello"); // false
```

因此，Number.isNaN 函数更加严格和可靠，推荐在编程中使用。

## 变量提升

在 JavaScript 中，"变量提升"（Hoisting）是一个重要的概念，它描述了变量和函数声明在代码执行前被提升到其所在作用域顶部的行为。这意味着即使你在代码中将变量声明放在了函数体的下半部分，或者在使用变量之前进行了声明，JavaScript 引擎也会在执行任何代码之前“提升”这些声明到当前作用域的顶部。

变量提升细节：

1. 变量声明与赋值分离：变量的声明会被提升，但赋值操作保持原位。如果只是声明了变量但没有赋值，那么变量的值会是 undefined 直到赋值语句被执行。
2. 函数声明与表达式：函数声明整体被提升，而函数表达式（匿名函数赋值给变量）只有变量声明被提升，函数定义不会提升。

```Javascript
console.log(a); // 输出 undefined，因为变量a被提升了，但还未赋值
var a = 5;

// 函数声明会被整体提升
sayHello(); // 输出 "Hello, world!"
function sayHello() {
    console.log("Hello, world!");
}

// 函数表达式的变量声明被提升，但函数定义不提升
greet(); // 抛出错误，因为虽然greet变量被提升了，但它还没有被赋值为函数
var greet; // 这一行在逻辑上是被提升的
greet = function() {
    console.log("Good day!");
};
greet(); // 输出 "Good day!"
```

注意点：
let 和 const: ES6 引入了 let 和 const 关键字来声明变量，它们具有块级作用域，且不完全遵循变量提升规则。使用 let 和 const 声明的变量不会被提升到作用域顶部，尝试在声明之前访问它们会导致 ReferenceError。

```Javascript
console.log(b); // 抛出 ReferenceError，因为let声明的变量没有被提升
let b = 10;
```

## 事件循环

在 JavaScript 中，事件循环是其异步编程模型的核心。事件循环管理着各种任务的执行，这些任务大致可以分为两类：宏任务（macrotasks）和微任务（microtasks）。

### 宏任务

宏任务是事件循环中最常见的一类任务，包括像 `setTimeout`, `setInterval`, `setImmediate`（在 Node.js 中）以及事件监听器等。宏任务的执行会占据事件循环的一个完整的周期。当一个宏任务开始执行时，它会一直运行直到完成，期间不会让出 CPU 给其他任务，即使这个任务很耗时。

### 微任务

微任务则是事件循环中的另一类任务，它包括 `Promise` 的回调、`MutationObserver` 的回调等。微任务的特点是，它们会在当前宏任务执行完毕后立即执行，但在下一轮宏任务开始之前。也就是说，一旦一个宏任务完成，事件循环会检查微任务队列中是否有任务需要执行，如果有，它会立即执行所有的微任务，直到微任务队列清空。

### 如何工作？

当 JavaScript 引擎执行代码时，它会遇到异步操作，如发起网络请求或创建一个 `Promise`。当这些异步操作完成时，它们会生成一个任务，这个任务会被放入适当的队列中。当当前的宏任务执行完毕，事件循环会先处理所有微任务队列中的任务，然后再继续下一个宏任务。

假设你有以下代码：

```Javascript
console.log('Start');

setTimeout(() => {
  console.log('Timer');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

```

这段代码的输出顺序将是：

1. Start
2. End
3. Promise
4. Timer

这里，`console.log('Start')`和 `console.log('End')`是同步代码，作为宏任务的一部分执行。`setTimeout` 也是一个宏任务，但它被安排在稍后的事件循环周期中执行。`Promise.resolve().then(...)`产生的任务是微任务，它会在当前宏任务执行完毕后立即执行，但在 `setTimeout` 宏任务之前。

## Generator 函数

Generator 函数是 ES6（ECMAScript 2015）引入的一种新特性，用于实现异步操作的同步化流程控制，同时也可以用来创建迭代器。

在 JavaScript 中，一个普通的函数一旦开始执行就会一直运行到结束，然后返回一个值。而 Generator 函数则不同，它允许函数的执行过程被暂停和恢复，这样就可以分段执行函数体内的逻辑。

-   **定义**：使用 `function*`语法来定义一个 Generator 函数。星号`*`表明这是一个特殊类型的函数，能够生成一系列的值。
-   **`yield`关键字**：在 Generator 函数内部，`yield`关键字用于产生一个值，并暂停函数的执行。当函数再次被调用时，它会从上次暂停的地方继续执行，而不是重新开始。
-   **迭代器协议**：Generator 函数返回一个迭代器对象，这个迭代器遵循迭代器协议，即具有 `next()`方法。调用 `next()`方法会执行 Generator 函数直到遇到下一个`yield`表达式，然后返回一个包含两个属性的对象：`value` 和 `done`。`value` 是`yield` 表达式的值，`done` 是一个布尔值，表示是否已经到达了 Generator 函数的末尾。
-   **双向通信**：除了产生值之外，Generator 函数还可以接收外部传入的值。这可以通过 `next()`方法的参数来实现。
-   **异步流控制**：由于其独特的暂停/恢复机制，Generator 函数非常适合用于异步编程，可以使得异步代码看起来像同步代码一样，提高了代码的可读性和可维护性。

一个简单的 Generator 函数如下所示：

```javascript
function* countUpTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}
const counter = countUpTo(5);
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
// ...
console.log(counter.next()); // { value: 5, done: false }
console.log(counter.next()); // { value: undefined, done: true }
```

## Symbol

`Symbol` 是一种新的原始数据类型，它被设计用来作为对象属性的键值。`Symbol` 值是唯一的，并且不会被转译或转码。`Symbol` 值不能与其他类型的值进行运算，但是可以显式转换为字符串或布尔值。

```javascript
let name = Symbol("name");
let age = Symbol("age");
let person = {
    [name]: "John",
    [age]: 30,
};
console.log(person[name]); // John
console.log(person[age]); // 30
```

switch 语句可以用来匹配 Symbol 值。

```javascript
const MONDAY = Symbol("Monday");
const TUESDAY = Symbol("Tuesday");

function getDayOfWeek(day) {
    switch (day) {
        case MONDAY:
            return "Monday";
        case TUESDAY:
            return "Tuesday";
        default:
            return "Invalid day";
    }
}
```

使用 `Symbol` 来代替字符串，可以避免魔术字符串的出现，使得代码更加可读和可维护。

```javascript
const shapes = {
    RECTANGLE: Symbol("Rectangle"),
    TRIANGLE: Symbol("Triangle"),
};
const getArea = (shape, width, height) => {
    let area = 0;
    switch (shape) {
        case shapes.RECTANGLE:
            area = width * height;
            break;
        case shapes.TRIANGLE:
            area = (width * height) / 2;
            break;
        default:
            area = 0;
            break;
    }
    return area;
};
console.log(getArea(shapes.RECTANGLE, 10, 20)); // 200
```

`Symbol` 作为属性名，在遍历对象时不会出现在 `for...in` 或 `for...of` 循环中，也不会被 `Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()` 等方法遍历。

## 稀疏数组

`let arr = [1, , 3];` 在这个例子中，`arr` 是一个稀疏数组，因为索引 `1` 没有被分配任何值。

-   **空槽行为**：空槽在访问时返回 `undefined`，这是因为没有给定索引的值尚未被设置。这些未被分配值的索引不是真正存储 `undefined`，而是被视为未定义的。
-   **`length`属性**：稀疏数组的 `length` 属性等于最后一个已分配索引加 `1`。即使某些中间索引未被赋值，`length` 也会反映出最大的索引。

    ```javascript
    let arr = [1];
    // 如果index >= oldLen，将自动调整数组的length属性，使其等于被设置的index + 1
    arr[2] = 3;
    console.log(arr.length); // 3
    ```

-   **遍历问题**：在遍历时，稀疏数组中的未定义元素不会被枚举，这意味着 `for` 循环或 `Array.prototype.forEach()`等迭代方法不会访问到那些空槽。
-   **性能影响**：稀疏数组可能会影响性能，因为它们不能高效地利用内存，且某些操作（如查找和遍历）可能更慢。密集数组（没有空槽的数组）通常提供更好的性能。
