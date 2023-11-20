# How to Set the Height of el-menu

| Original Source                                                           | Authors             | Title                                                   |
| ------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------- |
| [GitHub Issues](https://github.com/element-plus/element-plus/issues/4864) | xiangqunXiao et al. | [Bug Report] please do not set fixed height for el-menu |

*Disclaimer: This content belongs to the original author/creator and is being reposted for informational purposes.*

If you're using el-menu and want to customize its height, you may have noticed that it's not as straightforward as you might expect. This guide will show you how to set the height of el-menu using CSS variables.

## The Problem

By default, el-menu sets a fixed height for its items, which can be problematic if you want to customize the height of the menu. Fortunately, there's a way to work around this issue.

## The Solution

To set the height of el-menu, you can use the CSS variable --el-menu-item-height. This variable controls the height of each menu item, and you can set it to any value you like.

Here's an example of how to set the --el-menu-item-height variable to 40px:
```javascript
if (typeof document !== 'undefined') {
    const el = document.documentElement
    el.style.setProperty('--el-menu-item-height', '40px')
}
```
Simply add this code to your project, and el-menu will use the new height for its items.

**Current Version:**  
- `element-plus`: 2.3.8