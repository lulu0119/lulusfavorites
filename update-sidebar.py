import os
import json
import argparse
from typing import List, Dict, Any, Union

def generate_sidebar(args: argparse.Namespace) -> None:
    def _generate_sidebar(document_path: str = '/', collapsed: bool = False, collapse_depth: Union[int, None] = None,
                 exclude_files: List[str] = [], exclude_folders: List[str] = []) -> List[Dict[str, Any]]:
        result = []
        for item in os.listdir(document_path):
            if item.startswith('.'):
                continue
            item_path = os.path.join(document_path, item)
            if os.path.isdir(item_path):
                if item in exclude_folders:
                    continue
                sub_items = _generate_sidebar(
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
                link_path = os.path.relpath(item_path, start=".").replace("\\", "/")
                if link_path.startswith("docs/"):
                    link_path = link_path[5:]
                result.append({
                    "text": item[:-3],
                    "link": '/' + link_path
                })

        return result

    result = _generate_sidebar(
        document_path=args.document_path,
        exclude_files=args.exclude_files.split(","),
        exclude_folders=args.exclude_folders.split(","),
        collapse_depth=args.collapse_depth,
        collapsed=args.collapsed
    )
    with open(args.output_path, "w") as f:
        json.dump(result, f, indent=4)


def watch_for_changes(args: argparse.Namespace) -> None:
    import time
    import watchdog.events
    import watchdog.observers

    class EventHandler(watchdog.events.FileSystemEventHandler):
        def on_modified(self, event):
            if event.src_path.endswith(".md"):
                print("File modified:", event.src_path)
                generate_sidebar(args)

        def on_created(self, event):
            if event.src_path.endswith(".md"):
                print("File created:", event.src_path)
                generate_sidebar(args)

        def on_deleted(self, event):
            if event.src_path.endswith(".md"):
                print("File deleted:", event.src_path)
                generate_sidebar(args)

    observer = watchdog.observers.Observer()
    observer.schedule(EventHandler(), args.document_path, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


def main() -> None:
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
    parser.add_argument(
        "--watch",
        action="store_true",
        help="Whether to watch for changes"
    )
    args = parser.parse_args()

    if args.watch:
        watch_for_changes(args)
    else:
        generate_sidebar(args)


if __name__ == '__main__':
    main()
