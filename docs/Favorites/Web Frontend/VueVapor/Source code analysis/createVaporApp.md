# createVaporApp

::: warning
⚠️ [Vue Vapor](https://github.com/vuejs/core-vapor) 正处于积极开发阶段，目前并未正式发布。

我们的分析与讨论是基于 2024 年 6 月 23 日的 `main` 分支。随着 Vue Vapor 的持续开发，相关细节与结构可能有所变化。
:::

## 初始化应用实例

```typescript
import { createVaporApp } from "vue/vapor";
import App from "./App.vue";
createVaporApp(App).mount("#app");
```

每个 Vue Vapor 应用都是通过 Vue Vapor 的 `createVaporApp` 函数创建的。
`createVaporApp` 函数在 `packages/runtime-vapor/src/apiCreateVaporApp.ts` 被定义。

```typescript
/**
 * 创建一个Vapor应用程序。
 *
 * @param rootComponent 根组件。这是应用程序启动时渲染的第一个组件。
 * @param rootProps 根组件的属性（可选）。这些属性会被传递给根组件，用于配置根组件的行为或渲染。
 * @returns 返回一个App实例，代表了初始化后的Vapor应用程序。
 */
export function createVaporApp(rootComponent: Component, rootProps: RawProps | null = null): App {
    // 如果rootProps不是对象也不是函数，则在开发环境下发出警告，并将rootProps设置为null
    if (rootProps != null && !isObject(rootProps) && !isFunction(rootProps)) {
        __DEV__ && warn(`root props passed to app.mount() must be an object or function.`);
        rootProps = null;
    }

    const context = createAppContext();
    const installedPlugins = new WeakSet();
    // 这里声明了应用实例，在mount函数中会赋值
    let instance: ComponentInternalInstance;
    // 这里初始化了应用实例的基本属性，包括唯一标识符、根组件、根组件的属性、容器、上下文和实例。
    const app: App = (context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,

        version,
        // ...
        mount(rootContainer): any {
            // 之后会详细解析
        },
        // ...
    });

    return app;
}
```

`createAppContext` 函数创建了 app 上下文，并返回了上下文对象。

```typescript
export function createAppContext(): AppContext {
    return {
        app: null as any,
        mixins: [],
        config: {
            isNativeTag: NO,
            performance: false,
            errorHandler: undefined,
            warnHandler: undefined,
            globalProperties: {},
        },
        provides: Object.create(null),
        components: {},
        directives: {},
    };
}
```

## 应用挂载

```typescript
function mount(rootContainer): any {
    if (!instance) {
        rootContainer = normalizeContainer(rootContainer);
        // ...
        // 创建组件实例
        instance = createComponentInstance(rootComponent, rootProps, null, false, context);
        // 设置组件实例
        setupComponent(instance);
        // 将组件实例渲染到指定的根容器
        render(instance, rootContainer);

        app._container = rootContainer;
        // ...
        return instance;
    }
    // ...
}
```

`createComponentInstance` 函数位于 `packages/runtime-vapor/src/component.ts` 文件中，该函数主要用来创建组件实例。

```typescript
/**
 * @param component 组件定义对象。
 * @param rawProps 组件原始属性对象，可能为null。
 * @param slots 组件插槽对象，可能为null。
 * @param once v-once指令标识，默认为false。
 * @param appContext 应用上下文对象，可选参数，用于提供应用级别的配置和功能。
 * @returns 返回组件的内部实例对象。
 */
export function createComponentInstance(
    component: Component,
    rawProps: RawProps | null,
    slots: RawSlots | null,
    once: boolean = false,
    // application root node only
    appContext?: AppContext
): ComponentInternalInstance {
    // 获取当前上下文中的父组件实例
    const parent = getCurrentInstance();
    // 确定应用上下文，优先使用父组件的appContext，否则使用传入的appContext，若两者都未提供，则使用空的appContext对象
    const _appContext = (parent ? parent.appContext : appContext) || emptyAppContext;
    // 这段代码初始化了一个Vue组件的实例对象，详细配置了组件在不同生命周期阶段所需的各种属性和方法，以及与渲染、状态管理、依赖注入、事件处理等相关的信息。
    const instance: ComponentInternalInstance = {
        [componentKey]: true,
        uid: uid++,
        vapor: true,
        appContext: _appContext,
        // ...
    };
    // 设置组件的根节点和作用域
    instance.root = parent ? parent.root : instance;
    instance.scope = new BlockEffectScope(instance, parent && parent.scope);
    // 初始化组件的属性和插槽
    initProps(instance, rawProps, !isFunction(component), once);
    initSlots(instance, slots);
    // 绑定发射函数
    instance.emit = emit.bind(null, instance);

    return instance;
}
```
