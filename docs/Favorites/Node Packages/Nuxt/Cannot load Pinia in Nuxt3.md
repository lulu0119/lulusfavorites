# Cannot load Pinia in Nuxt3

https://stackoverflow.com/questions/72778412/cannot-load-pinia-in-nuxt3

Resolved by running: 
```shell
npm install pinia @pinia/nuxt @nuxtjs/composition-api --legacy-peer-deps
```