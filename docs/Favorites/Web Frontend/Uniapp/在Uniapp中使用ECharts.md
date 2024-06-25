::: warning
⚠️ This document is not the final version.

In the future, I plan to add multi-language support to my website. Stay tuned!
:::

# 在 Uniapp 中使用 ECharts

ECharts 是一款基于 JavaScript 的开源可视化库，它提供了丰富的图表类型和交互功能，可以帮助开发者快速构建各种数据可视化应用。然而，由于 ECharts 涉及大量 DOM 操作，无法跨端使用。为了解决这个问题，开发者可以使用 lime-echart 插件，使 ECharts 图表能够在 Uniapp 各端中运行。

## lime-echart 插件介绍

lime-echart 是一款 Uniapp 插件，它可以将 ECharts 图表渲染到 Uniapp 的各个端中，包括 H5、小程序、APP 等。使用 lime-echart 插件，开发者可以在 Uniapp 中轻松地创建和展示各种 ECharts 图表，而无需关心跨端兼容性问题。

## 安装和使用

下面是使用 lime-echart 在 Vue3 中使用 ECharts 的步骤：

1. 首先，我们需要访问https://ext.dcloud.net.cn/plugin?id=4899，下载插件并导入到HBuilderX中。
2. 然后，在页面中引入 ECharts 和 lime-echart 组件。如果您想使用全量包，可以使用以下代码：

```javascript
import * as echarts from "echarts";
```

如果您只需要使用特定的 ECharts 组件，可以使用以下代码：

```javascript
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
```

3. 接下来，在 Vue3 的模板中添加 lime-echart 组件：

```html
<template>
    <l-echart ref="chart"></l-echart>
</template>
```

4. 在 Vue3 的脚本中，我们需要引入 Vue3 的相关 API，并初始化 ECharts 实例并设置 option：

```vue
<script setup>
import { ref, onMounted } from "vue";

const option = {
    // 在这里设置echarts的option
};
// chart实例
const chart = ref(null);

// 初始化并设置option
onMounted(async () => {
    await chart.value.init(echarts, (chart) => chart.setOption(option.value));
});
</script>
```

5. 如果您需要更新 option，可以使用以下代码：

```vue
<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";

const option = computed(() => {
    return {
        // 在这里设置echarts的option
    };
});
// chart实例
const chart = ref(null);

// 初始化并设置option, 监听option变化
onMounted(async () => {
    await chart.value.init(echarts, (chart) => chart.setOption(option.value));
});

const unwatch = watchEffect(async () => {
    if (chart.value) {
        await chart.value.setOption(option.value);
    }
});

onUnmounted(() => {
    unwatch();
});
</script>
```

以上就是在 Uniapp 和 Vue3 中使用 ECharts 的步骤。使用 lime-echart 插件可以让我们更方便地在 Uniapp 各个平台中使用 ECharts，从而提高我们的开发效率。

**Current Version:**

-   `lime-echart`: 0.8.1
-   `vue`: 3.3.4
-   `echarts`: 5.4.3
-   `HBuilderX`: 3.8.12
