// docs/.vitepress/config.ts
import { defineConfig } from "file:///C:/Users/super/Documents/GitHub/lulusfavorites/node_modules/vitepress/dist/node/index.js";
import mathjax3 from "file:///C:/Users/super/Documents/GitHub/lulusfavorites/node_modules/markdown-it-mathjax3/index.js";

// docs/.vitepress/customElements.json
var customElements_default = [
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
  "annotation-xml"
];

// docs/.vitepress/sidebar.json
var sidebar_default = [
  {
    text: "Algorithm",
    collapsed: false,
    items: [
      {
        text: "Edit distance and backtracking path",
        link: "/Favorites/Algorithm/Edit distance and backtracking path.md"
      },
      {
        text: "Water pouring puzzle",
        link: "/Favorites/Algorithm/Water pouring puzzle.md"
      }
    ]
  },
  {
    text: "Dependency Guides",
    collapsed: false,
    items: [
      {
        text: "Conda",
        collapsed: true,
        items: [
          {
            text: "\u5B89\u88C5\u5B8CConda\u540E\u7684\u5FC5\u505A\u4E8B\u9879",
            link: "/Favorites/Dependency Guides/Conda/\u5B89\u88C5\u5B8CConda\u540E\u7684\u5FC5\u505A\u4E8B\u9879.md"
          },
          {
            text: "\u81EA\u52A8\u5316\u9879\u76EE\u73AF\u5883\u914D\u7F6E",
            link: "/Favorites/Dependency Guides/Conda/\u81EA\u52A8\u5316\u9879\u76EE\u73AF\u5883\u914D\u7F6E.md"
          }
        ]
      }
    ]
  },
  {
    text: "Operating System",
    collapsed: false,
    items: [
      {
        text: "Windows Subsystem for Linux",
        collapsed: true,
        items: [
          {
            text: "How do I free up space on WSL",
            link: "/Favorites/Operating System/Windows Subsystem for Linux/How do I free up space on WSL.md"
          },
          {
            text: "WSL and VMware Incompatibility",
            link: "/Favorites/Operating System/Windows Subsystem for Linux/WSL and VMware Incompatibility.md"
          }
        ]
      }
    ]
  },
  {
    text: "Raspberry Pi",
    collapsed: false,
    items: [
      {
        text: "Configuring I2C on the Raspberry Pi",
        link: "/Favorites/Raspberry Pi/Configuring I2C on the Raspberry Pi.md"
      },
      {
        text: "How to Fix No module named RPi Error on Raspberry Pi",
        link: "/Favorites/Raspberry Pi/How to Fix No module named RPi Error on Raspberry Pi.md"
      }
    ]
  },
  {
    text: "Toolbox",
    collapsed: false,
    items: [
      {
        text: "How to Use Git and GitHub",
        link: "/Favorites/Toolbox/How to Use Git and GitHub.md"
      },
      {
        text: "Interview Questions",
        collapsed: true,
        items: [
          {
            text: "Web Frontend",
            collapsed: true,
            items: [
              {
                text: "HTML & CSS",
                link: "/Favorites/Toolbox/Interview Questions/Web Frontend/HTML & CSS.md"
              },
              {
                text: "JavaScript",
                link: "/Favorites/Toolbox/Interview Questions/Web Frontend/JavaScript.md"
              },
              {
                text: "Uniapp",
                link: "/Favorites/Toolbox/Interview Questions/Web Frontend/Uniapp.md"
              },
              {
                text: "Vue",
                link: "/Favorites/Toolbox/Interview Questions/Web Frontend/Vue.md"
              },
              {
                text: "Web APIs",
                link: "/Favorites/Toolbox/Interview Questions/Web Frontend/Web APIs.md"
              }
            ]
          }
        ]
      },
      {
        text: "Interview Questions",
        link: "/Favorites/Toolbox/Interview Questions.md"
      },
      {
        text: "Prompt Palette",
        link: "/Favorites/Toolbox/Prompt Palette.md"
      },
      {
        text: "Tools",
        link: "/Favorites/Toolbox/Tools.md"
      }
    ]
  },
  {
    text: "Web Frontend",
    collapsed: false,
    items: [
      {
        text: "AJAX",
        collapsed: true,
        items: [
          {
            text: "Using AJAX to Interact with {JSON} Placeholder",
            link: "/Favorites/Web Frontend/AJAX/Using AJAX to Interact with {JSON} Placeholder.md"
          }
        ]
      },
      {
        text: "Element Plus",
        collapsed: true,
        items: [
          {
            text: "How to Set the Height of el-menu",
            link: "/Favorites/Web Frontend/Element Plus/How to Set the Height of el-menu.md"
          }
        ]
      },
      {
        text: "Nuxt",
        collapsed: true,
        items: [
          {
            text: "Cannot load Pinia in Nuxt3",
            link: "/Favorites/Web Frontend/Nuxt/Cannot load Pinia in Nuxt3.md"
          },
          {
            text: "How to use jQuery in Nuxt.js",
            link: "/Favorites/Web Frontend/Nuxt/How to use jQuery in Nuxt.js.md"
          },
          {
            text: "vuedraggable custom component setup in Nuxt3",
            link: "/Favorites/Web Frontend/Nuxt/vuedraggable custom component setup in Nuxt3.md"
          }
        ]
      },
      {
        text: "Uniapp",
        collapsed: true,
        items: [
          {
            text: "\u5728Uniapp\u4E2D\u4F7F\u7528ECharts",
            link: "/Favorites/Web Frontend/Uniapp/\u5728Uniapp\u4E2D\u4F7F\u7528ECharts.md"
          }
        ]
      },
      {
        text: "VitePress",
        collapsed: true,
        items: [
          {
            text: "How to use VitePress to show LaTeX",
            link: "/Favorites/Web Frontend/VitePress/How to use VitePress to show LaTeX.md"
          },
          {
            text: "VitePress Sidebar",
            link: "/Favorites/Web Frontend/VitePress/VitePress Sidebar.md"
          }
        ]
      }
    ]
  }
];

// docs/.vitepress/config.ts
var config_default = defineConfig({
  title: "Lulu's Favorites",
  description: `Welcome to "Lulu's Favorites"! Explore the tech wonders from my browser favorites - coding, hardware, and more. Let's embark on this tech journey together!`,
  head: [["link", { rel: "icon", href: "/1F31F.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/1F31F.svg',
    nav: [
      { text: "Home", link: "/" },
      { text: "Favorites", link: "/welcome" }
    ],
    search: {
      provider: "local"
    },
    sidebar: sidebar_default,
    socialLinks: [
      { icon: "github", link: "https://github.com/lulu0119" },
      { icon: "twitter", link: "https://twitter.com/lulu_8964" }
    ],
    footer: {
      message: `Content on "Lulu's Favorites" is under CC BY-NC-SA 4.0.`,
      copyright: "\xA9 2023-present Lulu All Rights Reserved."
    },
    editLink: {
      pattern: "https://github.com/lulu0119/lulusfavorites/tree/master/docs/:path",
      text: "Edit this page on GitHub"
    }
  },
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements_default.includes(tag)
      }
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY3VzdG9tRWxlbWVudHMuanNvbiIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3VwZXJcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxsdWx1c2Zhdm9yaXRlc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHN1cGVyXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcbHVsdXNmYXZvcml0ZXNcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvc3VwZXIvRG9jdW1lbnRzL0dpdEh1Yi9sdWx1c2Zhdm9yaXRlcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5pbXBvcnQgbWF0aGpheDMgZnJvbSBcIm1hcmtkb3duLWl0LW1hdGhqYXgzXCI7XHJcbmltcG9ydCBjdXN0b21FbGVtZW50cyBmcm9tIFwiLi9jdXN0b21FbGVtZW50cy5qc29uXCI7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNvblwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgdGl0bGU6IFwiTHVsdSdzIEZhdm9yaXRlc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IGBXZWxjb21lIHRvIFwiTHVsdSdzIEZhdm9yaXRlc1wiISBFeHBsb3JlIHRoZSB0ZWNoIHdvbmRlcnMgZnJvbSBteSBicm93c2VyIGZhdm9yaXRlcyAtIGNvZGluZywgaGFyZHdhcmUsIGFuZCBtb3JlLiBMZXQncyBlbWJhcmsgb24gdGhpcyB0ZWNoIGpvdXJuZXkgdG9nZXRoZXIhYCxcclxuICAgIGhlYWQ6IFtbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvMUYzMUYuc3ZnXCIgfV1dLFxyXG4gICAgdGhlbWVDb25maWc6IHtcclxuICAgICAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICAgICAgLy8gbG9nbzogJy8xRjMxRi5zdmcnLFxyXG4gICAgICAgIG5hdjogW1xyXG4gICAgICAgICAgICB7IHRleHQ6IFwiSG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiRmF2b3JpdGVzXCIsIGxpbms6IFwiL3dlbGNvbWVcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaWRlYmFyLFxyXG4gICAgICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgaWNvbjogXCJnaXRodWJcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbHVsdTAxMTlcIiB9LFxyXG4gICAgICAgICAgICB7IGljb246IFwidHdpdHRlclwiLCBsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb20vbHVsdV84OTY0XCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBgQ29udGVudCBvbiBcIkx1bHUncyBGYXZvcml0ZXNcIiBpcyB1bmRlciBDQyBCWS1OQy1TQSA0LjAuYCxcclxuICAgICAgICAgICAgY29weXJpZ2h0OiBcIlx1MDBBOSAyMDIzLXByZXNlbnQgTHVsdSBBbGwgUmlnaHRzIFJlc2VydmVkLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWRpdExpbms6IHtcclxuICAgICAgICAgICAgcGF0dGVybjogXCJodHRwczovL2dpdGh1Yi5jb20vbHVsdTAxMTkvbHVsdXNmYXZvcml0ZXMvdHJlZS9tYXN0ZXIvZG9jcy86cGF0aFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICAgIGNvbmZpZzogKG1kKSA9PiB7XHJcbiAgICAgICAgICAgIG1kLnVzZShtYXRoamF4Myk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB2dWU6IHtcclxuICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gY3VzdG9tRWxlbWVudHMuaW5jbHVkZXModGFnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiIsICJbXHJcbiAgICBcIm1qeC1jb250YWluZXJcIixcclxuICAgIFwibWp4LWFzc2lzdGl2ZS1tbWxcIixcclxuICAgIFwibWF0aFwiLFxyXG4gICAgXCJtYWN0aW9uXCIsXHJcbiAgICBcIm1hbGlnbmdyb3VwXCIsXHJcbiAgICBcIm1hbGlnbm1hcmtcIixcclxuICAgIFwibWVuY2xvc2VcIixcclxuICAgIFwibWVycm9yXCIsXHJcbiAgICBcIm1mZW5jZWRcIixcclxuICAgIFwibWZyYWNcIixcclxuICAgIFwibWlcIixcclxuICAgIFwibWxvbmdkaXZcIixcclxuICAgIFwibW11bHRpc2NyaXB0c1wiLFxyXG4gICAgXCJtblwiLFxyXG4gICAgXCJtb1wiLFxyXG4gICAgXCJtb3ZlclwiLFxyXG4gICAgXCJtcGFkZGVkXCIsXHJcbiAgICBcIm1waGFudG9tXCIsXHJcbiAgICBcIm1yb290XCIsXHJcbiAgICBcIm1yb3dcIixcclxuICAgIFwibXNcIixcclxuICAgIFwibXNjYXJyaWVzXCIsXHJcbiAgICBcIm1zY2FycnlcIixcclxuICAgIFwibXNjYXJyaWVzXCIsXHJcbiAgICBcIm1zZ3JvdXBcIixcclxuICAgIFwibXN0YWNrXCIsXHJcbiAgICBcIm1sb25nZGl2XCIsXHJcbiAgICBcIm1zbGluZVwiLFxyXG4gICAgXCJtc3RhY2tcIixcclxuICAgIFwibXNwYWNlXCIsXHJcbiAgICBcIm1zcXJ0XCIsXHJcbiAgICBcIm1zcm93XCIsXHJcbiAgICBcIm1zdGFja1wiLFxyXG4gICAgXCJtc3RhY2tcIixcclxuICAgIFwibXN0eWxlXCIsXHJcbiAgICBcIm1zdWJcIixcclxuICAgIFwibXN1cFwiLFxyXG4gICAgXCJtc3Vic3VwXCIsXHJcbiAgICBcIm10YWJsZVwiLFxyXG4gICAgXCJtdGRcIixcclxuICAgIFwibXRleHRcIixcclxuICAgIFwibXRyXCIsXHJcbiAgICBcIm11bmRlclwiLFxyXG4gICAgXCJtdW5kZXJvdmVyXCIsXHJcbiAgICBcInNlbWFudGljc1wiLFxyXG4gICAgXCJtYXRoXCIsXHJcbiAgICBcIm1pXCIsXHJcbiAgICBcIm1uXCIsXHJcbiAgICBcIm1vXCIsXHJcbiAgICBcIm1zXCIsXHJcbiAgICBcIm1zcGFjZVwiLFxyXG4gICAgXCJtdGV4dFwiLFxyXG4gICAgXCJtZW5jbG9zZVwiLFxyXG4gICAgXCJtZXJyb3JcIixcclxuICAgIFwibWZlbmNlZFwiLFxyXG4gICAgXCJtZnJhY1wiLFxyXG4gICAgXCJtcGFkZGVkXCIsXHJcbiAgICBcIm1waGFudG9tXCIsXHJcbiAgICBcIm1yb290XCIsXHJcbiAgICBcIm1yb3dcIixcclxuICAgIFwibXNxcnRcIixcclxuICAgIFwibXN0eWxlXCIsXHJcbiAgICBcIm1tdWx0aXNjcmlwdHNcIixcclxuICAgIFwibW92ZXJcIixcclxuICAgIFwibXByZXNjcmlwdHNcIixcclxuICAgIFwibXN1YlwiLFxyXG4gICAgXCJtc3Vic3VwXCIsXHJcbiAgICBcIm1zdXBcIixcclxuICAgIFwibXVuZGVyXCIsXHJcbiAgICBcIm11bmRlcm92ZXJcIixcclxuICAgIFwibm9uZVwiLFxyXG4gICAgXCJtYWxpZ25ncm91cFwiLFxyXG4gICAgXCJtYWxpZ25tYXJrXCIsXHJcbiAgICBcIm10YWJsZVwiLFxyXG4gICAgXCJtdGRcIixcclxuICAgIFwibXRyXCIsXHJcbiAgICBcIm1sb25nZGl2XCIsXHJcbiAgICBcIm1zY2Fycmllc1wiLFxyXG4gICAgXCJtc2NhcnJ5XCIsXHJcbiAgICBcIm1zZ3JvdXBcIixcclxuICAgIFwibXNsaW5lXCIsXHJcbiAgICBcIm1zcm93XCIsXHJcbiAgICBcIm1zdGFja1wiLFxyXG4gICAgXCJtYWN0aW9uXCIsXHJcbiAgICBcInNlbWFudGljc1wiLFxyXG4gICAgXCJhbm5vdGF0aW9uXCIsXHJcbiAgICBcImFubm90YXRpb24teG1sXCJcclxuXVxyXG4iLCAiW1xyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIkFsZ29yaXRobVwiLFxyXG4gICAgICAgIFwiY29sbGFwc2VkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJFZGl0IGRpc3RhbmNlIGFuZCBiYWNrdHJhY2tpbmcgcGF0aFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9BbGdvcml0aG0vRWRpdCBkaXN0YW5jZSBhbmQgYmFja3RyYWNraW5nIHBhdGgubWRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXYXRlciBwb3VyaW5nIHB1enpsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9BbGdvcml0aG0vV2F0ZXIgcG91cmluZyBwdXp6bGUubWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJEZXBlbmRlbmN5IEd1aWRlc1wiLFxyXG4gICAgICAgIFwiY29sbGFwc2VkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDb25kYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFx1NWI4OVxcdTg4YzVcXHU1YjhjQ29uZGFcXHU1NDBlXFx1NzY4NFxcdTVmYzVcXHU1MDVhXFx1NGU4YlxcdTk4NzlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9EZXBlbmRlbmN5IEd1aWRlcy9Db25kYS9cXHU1Yjg5XFx1ODhjNVxcdTViOGNDb25kYVxcdTU0MGVcXHU3Njg0XFx1NWZjNVxcdTUwNWFcXHU0ZThiXFx1OTg3OS5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcdTgxZWFcXHU1MmE4XFx1NTMxNlxcdTk4NzlcXHU3NmVlXFx1NzNhZlxcdTU4ODNcXHU5MTRkXFx1N2Y2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL0RlcGVuZGVuY3kgR3VpZGVzL0NvbmRhL1xcdTgxZWFcXHU1MmE4XFx1NTMxNlxcdTk4NzlcXHU3NmVlXFx1NzNhZlxcdTU4ODNcXHU5MTRkXFx1N2Y2ZS5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJPcGVyYXRpbmcgU3lzdGVtXCIsXHJcbiAgICAgICAgXCJjb2xsYXBzZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIldpbmRvd3MgU3Vic3lzdGVtIGZvciBMaW51eFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSG93IGRvIEkgZnJlZSB1cCBzcGFjZSBvbiBXU0xcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9PcGVyYXRpbmcgU3lzdGVtL1dpbmRvd3MgU3Vic3lzdGVtIGZvciBMaW51eC9Ib3cgZG8gSSBmcmVlIHVwIHNwYWNlIG9uIFdTTC5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIldTTCBhbmQgVk13YXJlIEluY29tcGF0aWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL09wZXJhdGluZyBTeXN0ZW0vV2luZG93cyBTdWJzeXN0ZW0gZm9yIExpbnV4L1dTTCBhbmQgVk13YXJlIEluY29tcGF0aWJpbGl0eS5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJSYXNwYmVycnkgUGlcIixcclxuICAgICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZSxcclxuICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ29uZmlndXJpbmcgSTJDIG9uIHRoZSBSYXNwYmVycnkgUGlcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvUmFzcGJlcnJ5IFBpL0NvbmZpZ3VyaW5nIEkyQyBvbiB0aGUgUmFzcGJlcnJ5IFBpLm1kXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSG93IHRvIEZpeCBObyBtb2R1bGUgbmFtZWQgUlBpIEVycm9yIG9uIFJhc3BiZXJyeSBQaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9SYXNwYmVycnkgUGkvSG93IHRvIEZpeCBObyBtb2R1bGUgbmFtZWQgUlBpIEVycm9yIG9uIFJhc3BiZXJyeSBQaS5tZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIlRvb2xib3hcIixcclxuICAgICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZSxcclxuICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSG93IHRvIFVzZSBHaXQgYW5kIEdpdEh1YlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9Ub29sYm94L0hvdyB0byBVc2UgR2l0IGFuZCBHaXRIdWIubWRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbnRlcnZpZXcgUXVlc3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWIgRnJvbnRlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSFRNTCAmIENTU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9JbnRlcnZpZXcgUXVlc3Rpb25zL1dlYiBGcm9udGVuZC9IVE1MICYgQ1NTLm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9JbnRlcnZpZXcgUXVlc3Rpb25zL1dlYiBGcm9udGVuZC9KYXZhU2NyaXB0Lm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVW5pYXBwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9Ub29sYm94L0ludGVydmlldyBRdWVzdGlvbnMvV2ViIEZyb250ZW5kL1VuaWFwcC5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlZ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9JbnRlcnZpZXcgUXVlc3Rpb25zL1dlYiBGcm9udGVuZC9WdWUubWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWIgQVBJc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9JbnRlcnZpZXcgUXVlc3Rpb25zL1dlYiBGcm9udGVuZC9XZWIgQVBJcy5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkludGVydmlldyBRdWVzdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9JbnRlcnZpZXcgUXVlc3Rpb25zLm1kXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUHJvbXB0IFBhbGV0dGVcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvVG9vbGJveC9Qcm9tcHQgUGFsZXR0ZS5tZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlRvb2xzXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL1Rvb2xib3gvVG9vbHMubWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJXZWIgRnJvbnRlbmRcIixcclxuICAgICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZSxcclxuICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQUpBWFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVXNpbmcgQUpBWCB0byBJbnRlcmFjdCB3aXRoIHtKU09OfSBQbGFjZWhvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL1dlYiBGcm9udGVuZC9BSkFYL1VzaW5nIEFKQVggdG8gSW50ZXJhY3Qgd2l0aCB7SlNPTn0gUGxhY2Vob2xkZXIubWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRWxlbWVudCBQbHVzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIb3cgdG8gU2V0IHRoZSBIZWlnaHQgb2YgZWwtbWVudVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL1dlYiBGcm9udGVuZC9FbGVtZW50IFBsdXMvSG93IHRvIFNldCB0aGUgSGVpZ2h0IG9mIGVsLW1lbnUubWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiTnV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ2Fubm90IGxvYWQgUGluaWEgaW4gTnV4dDNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9XZWIgRnJvbnRlbmQvTnV4dC9DYW5ub3QgbG9hZCBQaW5pYSBpbiBOdXh0My5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhvdyB0byB1c2UgalF1ZXJ5IGluIE51eHQuanNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9XZWIgRnJvbnRlbmQvTnV4dC9Ib3cgdG8gdXNlIGpRdWVyeSBpbiBOdXh0LmpzLm1kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwidnVlZHJhZ2dhYmxlIGN1c3RvbSBjb21wb25lbnQgc2V0dXAgaW4gTnV4dDNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9XZWIgRnJvbnRlbmQvTnV4dC92dWVkcmFnZ2FibGUgY3VzdG9tIGNvbXBvbmVudCBzZXR1cCBpbiBOdXh0My5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJVbmlhcHBcIixcclxuICAgICAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcdTU3MjhVbmlhcHBcXHU0ZTJkXFx1NGY3ZlxcdTc1MjhFQ2hhcnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9GYXZvcml0ZXMvV2ViIEZyb250ZW5kL1VuaWFwcC9cXHU1NzI4VW5pYXBwXFx1NGUyZFxcdTRmN2ZcXHU3NTI4RUNoYXJ0cy5tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJWaXRlUHJlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhvdyB0byB1c2UgVml0ZVByZXNzIHRvIHNob3cgTGFUZVhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL0Zhdm9yaXRlcy9XZWIgRnJvbnRlbmQvVml0ZVByZXNzL0hvdyB0byB1c2UgVml0ZVByZXNzIHRvIHNob3cgTGFUZVgubWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJWaXRlUHJlc3MgU2lkZWJhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvRmF2b3JpdGVzL1dlYiBGcm9udGVuZC9WaXRlUHJlc3MvVml0ZVByZXNzIFNpZGViYXIubWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXSJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1gsU0FBUyxvQkFBb0I7QUFDL1ksT0FBTyxjQUFjOzs7QUNEckI7QUFBQSxFQUNJO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7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
