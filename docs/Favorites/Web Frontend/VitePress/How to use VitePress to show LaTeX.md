# How to use VitePress to show LaTeX

| Original Source                                                | Authors         | Title                        |
| -------------------------------------------------------------- | --------------- | ---------------------------- |
| [GitHub Issues](https://github.com/vuejs/vitepress/issues/529) | ngctnnnn et al. | KaTeX/MathJax implementation |

_Disclaimer: This content belongs to the original author/creator and is being reposted for informational purposes._

To add mathematical formulas to Markdown using VitePress, the default parser does not support LaTeX. I recommend using the `markdown-it-mathjax3` plugin, which is a fork of `markdown-it-katex` and supports MathJax v3 and SVG rendering.

Here is the configuration method:

1. Install this plugin

    ```shell
    npm install markdown-it-mathjax3
    ```

2. Modify the configuration file .vitepress/config.js

    ```javascript
    import mathjax3 from "markdown-it-mathjax3";

    const customElements = [
        "mjx-container",
        "mjx-assistive-mml",
        "math",
        "maction",
        "maligngroup",
        "malignmark",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mi",
        "mlongdiv",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mscarries",
        "mscarry",
        "mscarries",
        "msgroup",
        "mstack",
        "mlongdiv",
        "msline",
        "mstack",
        "mspace",
        "msqrt",
        "msrow",
        "mstack",
        "mstack",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
        "semantics",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mspace",
        "mtext",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "msqrt",
        "mstyle",
        "mmultiscripts",
        "mover",
        "mprescripts",
        "msub",
        "msubsup",
        "msup",
        "munder",
        "munderover",
        "none",
        "maligngroup",
        "malignmark",
        "mtable",
        "mtd",
        "mtr",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "msline",
        "msrow",
        "mstack",
        "maction",
        "semantics",
        "annotation",
        "annotation-xml",
    ];

    export default {
        markdown: {
            config: (md) => {
                md.use(mathjax3);
            },
        },
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => customElements.includes(tag),
                },
            },
        },
    };
    ```

3. Add the following CSS to make inline math available:

    ```CSS
    mjx-container {
        display: inline-block;
        margin: auto 2px -2px;
    }

    mjx-container > svg {
        margin: auto;
        display: inline-block;
    }
    ```

With these steps, you should now be able to use LaTeX in your VitePress Markdown documents.

If you encounter any issues or have any questions, please feel free to contact me.

**Current Version:**

-   `markdown-it-mathjax3`: 4.3.2
-   `vitepress`: 1.0.0-beta.6
