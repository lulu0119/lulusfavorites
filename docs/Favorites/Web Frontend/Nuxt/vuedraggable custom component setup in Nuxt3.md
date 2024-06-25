# vuedraggable custom component setup in Nuxt3

| Original Source                                                                                             | Author  | Title                                        | Copyright Notice |
| ----------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------- | ---------------- |
| [Stack Overflow](https://stackoverflow.com/questions/73614735/vuedraggable-custom-component-setup-in-nuxt3) | Jordash | vuedraggable custom component setup in Nuxt3 | CC BY-SA 4.0     |

## Installation

Install vuedraggable with npm or yarn:

```shell
npm i -S vuedraggable@next

yarn add vuedraggable@next
```

Then created this file in /plugins/vue-draggable.client.js

```javascript
import draggable from "vuedraggable";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("draggable", draggable);
});
```

## Typical use:

```html
<draggable v-model="myArray" item-key="id">
    <template #item="{element}">
        <div>{{element.name}}</div>
    </template>
</draggable>
```

With transition-group:

```html
<draggable v-model="myArray" tag="transition-group" item-key="id">
    <template #item="{element}">
        <div>{{element.name}}</div>
    </template>
</draggable>
```

**Current Version:**

-   `nuxt`: 3.6.2
-   `vuedraggable`: 4.1.0
