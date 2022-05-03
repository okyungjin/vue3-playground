# vue3-snippets

# DEV Notes
## watch 속성에서 arrow function 사용 시
computed, watch 속성에서 arrow function 사용 시 `this`는 `undefined`이다.
```js
export default {
  watch: {
    opt_count: (cur, prev) => {
      console.log(`Options API watch : ${prev} ==> ${cur}`);
      console.log(this);
    },
  }
}
```

arrow function을 사용하지 않으면 this가 정상적으로 출력된다.
```js
export default {
  watch: {
    opt_count(cur, prev) {
      console.log(`Options API watch : ${prev} ==> ${cur}`);
      console.log(this);
    }		
  },
}
```
이는 vue3에서도 동일한 결과이다.

> computed, watch 속성에서는 arrow function 사용을 가급적이면 피하자.


# Vue 3 공식문서 읽기

## Components Basics
### [Defining a Component](https://vuejs.org/guide/essentials/component-basics.html#defining-a-component)

**SFC (Single File Component)**
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

<br>

**Plain JavaScript**
When not using a build step, a Vue component can be defined as a plain JavaScript object containing Vue-specific options:

```js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // or `template: '#my-template-element'`
}
```

You can also use an ID selector pointing to an element (usually native `<template>` elements) - Vue will use its content as the template source.

### [Using a Comnonent](https://vuejs.org/guide/essentials/component-basics.html#using-a-component)

```vue
<h1>Here are many child components!</h1>
<ButtonCounter />
<ButtonCounter />
<ButtonCounter />
```

In SFCs, it's recommended to use `PascalCase` tag names for child components to differentiate from native HTML elements. 

Although native HTML tag names are case-insensitive, **Vue SFC is** a compiled format so we are able to use **case-sensitive** tag names in it. 

We are also able to use `/>` to close a tag.

> - HTML 태그와 구분을 위해 SFC에서는 PascalCase tag name을 사용하는 것을 권장한다.
> - HTML 태그는 case-sensitive 하지 않지만, Vue SFC는 case-sensitive하다.

<br>


If you are authoring your templates directly in a DOM (e.g. as the content of a native `<template>` element), the template will be subject to the browser's native HTML parsing behavior.

In such cases, you will need to use `kebab-case` and **explicit closing tag**s for components:

```vue
<!-- if this template is written in the DOM -->
<button-counter></button-counter>
<button-counter></button-counter>
<button-counter></button-counter>
```

