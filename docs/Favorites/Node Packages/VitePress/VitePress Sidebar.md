# VitePress Sidebar
## Introduction
Vitepress has a beautiful and easy-to-use sidebar, but currently, it doesn't offer an option to automatically generate sidebars. However, there are several plugins available that can help you achieve this functionality. Some popular options include:
- Vitepress-Sidebar
- Vite-Plugin-Vitepress-Auto-Sidebar

If you prefer not to install multiple plugins, you can use the following code to create a sidebar:

```python
import os
import json

def auto_sidebar(document_path='/', collapsed=False, collapse_depth=None, exclude_files=[], exclude_folders=[]):
    result = []
    for item in os.listdir(document_path):
        item_path = os.path.join(document_path, item)
        if os.path.isdir(item_path):
            if item in exclude_folders:
                continue
            sub_items = auto_sidebar(
                document_path=item_path, 
                collapsed=collapsed, 
                collapse_depth=collapse_depth - 1 if isinstance(collapse_depth, int) else None, 
                exclude_files=exclude_files, 
                exclude_folders=exclude_folders
                )
            if sub_items:
                result.append({
                    "text": item,
                    "collapsed": collapsed and (collapse_depth is None or collapse_depth <= 0),
                    "items": sub_items
                })
        elif item.endswith(".md"):
            if item in exclude_files or item[:-3] in exclude_files:
                continue
            result.append({
                "text": item[:-3],
                "link": '/' + os.path.relpath(item_path, start=".").replace("\\", "/")
            })
    
    return result
```

## How the code snippet works
Suppose you have a documentation site with the following file structure:
```shell
/
├── README.md
├── getting-started.md
├── advanced/
│   ├── topics.md
│   └── examples.md
└── api/
    ├── reference.md
    └── usage.md
```

To generate a sidebar for this site, you can call the auto_sidebar function with the following arguments:
```python
document_path = './'
output_path = '.vitepress/sidebar.json'
exclude_files = ['README.md']
exclude_folders = ['.vitepress']
result = auto_sidebar(
    document_path=document_path,
    exclude_files=exclude_files,
    exclude_folders=exclude_folders
)
with open(output_path, "w") as f:
    json.dump(result, f, indent=4)
```
This will generate a sidebar with the following structure:
```
- Getting Started
- Advanced
  - Topics
  - Examples
```

Let's break down the options: 

`document_path`: The path to the root directory of your documentation site. In this example, it's `./`.  
`collapsed`: A boolean flag that determines whether sub-items in the sidebar should be collapsed by default. In this example, it's not specified, so it defaults to False.  
`collapse_depth`: An integer that determines how many levels of sub-items should be collapsed by default. In this example, it's not specified, so it defaults to None.  
`exclude_files`: A list of filenames that should be excluded from the sidebar. In this example, we're excluding `README.md`.  
`exclude_folders`: A list of folder names that should be excluded from the sidebar. In this example, we're excluding the `api` folder.

The `auto_sidebar` function recursively traverses the directory tree starting from `document_path` and generates a nested list of dictionaries representing the sidebar items.

## How to implement
Once you've generated the sidebar using the `auto_sidebar` function, you can save it as a JSON file and import it in your `.vitepress/config.js` file using the sidebar option in the `themeConfig` object.
```typescript
import sidebar from './sidebar.json'

export default defineConfig({
  themeConfig: {
    sidebar
  }
});
```
With this configuration, VitePress will have a sidebar based on the file structure of your documentation site, excluding any files or folders that you've specified in the exclude_files and exclude_folders options.

I hope this helps you generate a beautiful and easy-to-use sidebar for your VitePress documentation site!


