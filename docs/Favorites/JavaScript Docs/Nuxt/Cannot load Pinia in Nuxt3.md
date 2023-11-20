# Cannot load Pinia in Nuxt3

| Original Source                                                                           | Authors        | Title                      | Copyright Notice |
| ----------------------------------------------------------------------------------------- | -------------- | -------------------------- | ---------------- |
| [Stack Overflow](https://stackoverflow.com/questions/72778412/cannot-load-pinia-in-nuxt3) | SimaPro et al. | Cannot load Pinia in Nuxt3 | CC BY-SA 4.0     |


Resolved by running: 
```shell
npm install pinia @pinia/nuxt @nuxtjs/composition-api --legacy-peer-deps
```