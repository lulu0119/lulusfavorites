::: warning
⚠️ This document is not the final version. 

In the future, I plan to add multi-language support to my website. Stay tuned!
:::

# 在Uniapp中使用ECharts
ECharts是一款基于JavaScript的开源可视化库，它提供了丰富的图表类型和交互功能，可以帮助开发者快速构建各种数据可视化应用。然而，由于ECharts涉及大量DOM操作，无法跨端使用。为了解决这个问题，开发者可以使用lime-echart插件，使ECharts图表能够在Uniapp各端中运行。
## lime-echart插件介绍
lime-echart是一款Uniapp插件，它可以将ECharts图表渲染到Uniapp的各个端中，包括H5、小程序、APP等。使用lime-echart插件，开发者可以在Uniapp中轻松地创建和展示各种ECharts图表，而无需关心跨端兼容性问题。
## 安装和使用
下面是使用lime-echart在Vue3中使用ECharts的步骤：
1. 首先，我们需要访问https://ext.dcloud.net.cn/plugin?id=4899，下载插件并导入到HBuilderX中。
2. 然后，在页面中引入ECharts和lime-echart组件。如果您想使用全量包，可以使用以下代码：
```javascript
import * as echarts from 'echarts'
```
如果您只需要使用特定的ECharts组件，可以使用以下代码：
```javascript
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
```
3. 接下来，在Vue3的模板中添加lime-echart组件：
```html
<template>
    <l-echart ref="chart"></l-echart>
</template>
```
4. 在Vue3的脚本中，我们需要引入Vue3的相关API，并初始化ECharts实例并设置option：
```vue
<script setup>
import { ref, onMounted } from 'vue'

const option = {
    // 在这里设置echarts的option
}
// chart实例
const chart = ref(null)

// 初始化并设置option
onMounted(async () => {
    await chart.value.init(echarts, (chart) => chart.setOption(option.value));
})

</script>
```
5. 如果您需要更新option，可以使用以下代码：
```vue
<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'

const option = computed(() => {
    return {
        // 在这里设置echarts的option
    }
})
// chart实例
const chart = ref(null)

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

以上就是在Uniapp和Vue3中使用ECharts的步骤。使用lime-echart插件可以让我们更方便地在Uniapp各个平台中使用ECharts，从而提高我们的开发效率。

**Current Version:**  
- `lime-echart`: 0.8.1
- `vue`: 3.3.4
- `echarts`: 5.4.3
- `HBuilderX`: 3.8.12