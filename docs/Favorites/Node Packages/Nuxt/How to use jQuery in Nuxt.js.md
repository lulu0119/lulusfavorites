# How to use jQuery in Nuxt.js

| Original Source                                                       | Author       | Title                        |
| --------------------------------------------------------------------- | ------------ | ---------------------------- |
| [Kaloraat](https://kaloraat.com/articles/how-to-use-jquery-in-nuxtjs) | Ryan Dhungel | How to use jQuery in Nuxt.js |

*Disclaimer: This content belongs to the original author/creator and is being reposted for informational purposes.*

## First way (easy) 

### Using CDN

Update the nuxt.config.js head section with the following code:

```javascript
head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      }
    ],

    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
```

## Second way

### Add jQuery as a plugin to Nuxt.js

Create a file called bootstrap.js inside plugins folder, which is in the root directory of your nuxt.js project. Paste the following code.

```javascript
// /plugins/bootstrap.js
if (process.BROWSER_BUILD) {
	require("bootstrap");
}
```

### Install Bootstrap, jQuery and Popper.js

```shell
npm install --save bootstrap jquery popper.js
```

### Configure nuxt.config.js

On top of your **nuxt.config.js** file, require webpack.

load Bootstrap and jQuery from the node_modules folder 

Add them to vendor's array and configure jQuery as a webpack plugin

Then inside module.exports object add or modify the existing build option with the following code. 

```javascript
// full code of nuxt.config.js

const webpack = require("webpack");

module.exports = {
  // load bootstrap and jquery
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.css"],
  plugins: ["~plugins/bootstrap.js"],
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
```