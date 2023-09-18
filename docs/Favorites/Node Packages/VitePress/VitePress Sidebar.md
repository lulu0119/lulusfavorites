# VitePress Sidebar
## Introduction
Vitepress has a beautiful and easy-to-use sidebar, but currently, it doesn't offer an option to automatically generate sidebars. However, there are several plugins available that can help you achieve this functionality. Some popular options include:
- Vitepress-Sidebar
- Vite-Plugin-Vitepress-Auto-Sidebar

If you prefer not to install multiple plugins, you can use the following code to create a sidebar.

## Create the Python Script
The first step is to create a Python script that contains the `sidebar_generator` function and the code for parsing command-line arguments. You can store this script in a file with any name you like, but we recommend naming it `sidebar_generator.py` to make it clear what the script does.
Here's an example of what the `sidebar_generator.py` file might look like:

```python
import os
import json
import argparse

def sidebar_generator(document_path='/', collapsed=False, collapse_depth=None, exclude_files=[], exclude_folders=[]):
    result = []
    for item in os.listdir(document_path):
        if item.startswith('.'):
            continue
        item_path = os.path.join(document_path, item)
        if os.path.isdir(item_path):
            if item in exclude_folders:
                continue
            sub_items = sidebar_generator(
                document_path=item_path,
                collapsed=collapsed,
                collapse_depth=collapse_depth -
                1 if isinstance(collapse_depth, int) else None,
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
            link_path = os.path.relpath(item_path, start=".").replace("\\", "/")
            if link_path.startswith("docs/"):
                link_path = link_path[5:]
            result.append({
                "text": item[:-3],
                "link": '/' + link_path
            })

    return result

def main():
    # Parse command-line arguments
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--document-path",
        type=str,
        default="docs/",
        help="Path to the root directory of the documentation")
    parser.add_argument(
        "--output-path",
        type=str,
        default="docs/.vitepress/sidebar.json",
        help="Path to the output file")
    parser.add_argument(
        "--exclude-files",
        type=str,
        default="",
        help="Comma-separated list of files to exclude")
    parser.add_argument(
        "--exclude-folders",
        type=str,
        default="",
        help="Comma-separated list of folders to exclude")
    parser.add_argument(
        "--collapse-depth",
        type=int,
        default=None,
        help="Number of levels to collapse")
    parser.add_argument(
        "--collapsed",
        action="store_true",
        help="Whether to collapse the sidebar")
    args = parser.parse_args()

    # Generate the sidebar
    result = sidebar_generator(
        document_path=args.document_path,
        exclude_files=args.exclude_files.split(","),
        exclude_folders=args.exclude_folders.split(","),
        collapse_depth=args.collapse_depth,
        collapsed=args.collapsed
    )

    with open(args.output_path, "w") as f:
        json.dump(result, f, indent=4)

if __name__ == '__main__':
    main()

```

## How the Script Works
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
result = sidebar_generator(
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

The `sidebar_generator` function recursively traverses the directory tree starting from `document_path` and generates a nested list of dictionaries representing the sidebar items.

## Generate the Sidebar

Once you've created the `sidebar_generator.py` file, you can use it to generate the sidebar for your VitePress documentation site. To do this, you can run the `sidebar_generator.py` file from the command line using the following command:
```shell
python sidebar_generator.py --document-path docs/ --exclude-files README.md --exclude-folders api --collapse-depth 2 --collapsed --output-path docs/.vitepress/sidebar.json
```

This will generate a sidebar for the `docs/` directory, excluding the `README.md` file and the `api` folder, collapsing sub-items to a depth of 2 levels, and setting the sidebar to be initially collapsed. The resulting JSON object will be saved to the `docs/.vitepress/sidebar.json` file.

## How to implement
Once you've generated the sidebar using the `sidebar_generator` function, you can save it as a JSON file and import it in your `.vitepress/config.js` file using the sidebar option in the `themeConfig` object.
```typescript
import sidebar from './sidebar.json'

export default defineConfig({
  themeConfig: {
    sidebar
  }
});
```
With this configuration, VitePress will have a sidebar based on the file structure of your documentation site, excluding any files or folders that you've specified in the exclude_files and exclude_folders options.

## Automatically Generate
To generate the sidebar automatically before building your VitePress site, you can add a command to your `package.json` file that runs the `sidebar_generator.py` file before running the vitepress build command.

Here's an example of how to add this command to your package.json file:
```json
{
    "scripts": {
    "prebuild": "python sidebar_generator.py --document-path docs/ --exclude-files README.md --exclude-folders api --collapse-depth 2 --collapsed --output-path docs/.vitepress/sidebar.json",
    "docs:build": "npm run prebuild && vitepress build docs",
  }
}
```
With this configuration, the sidebar will be generated automatically before building your VitePress site, ensuring that the sidebar is always up-to-date with the contents of your documentation site.

I hope this helps you generate a beautiful and easy-to-use sidebar for your VitePress documentation site!
