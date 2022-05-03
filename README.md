# Table of Contents
- [Table of Contents](#table-of-contents)
- [vue3-snippets](#vue3-snippets)
- [DEV Notes](#dev-notes)
  - [watch 속성에서 arrow function 사용 시](#watch-속성에서-arrow-function-사용-시)
- [Vue 3 공식문서 읽기](#vue-3-공식문서-읽기)
  - [[Components Basics] Defining a Component](#components-basics-defining-a-component)
    - [SFC (Single File Component)](#sfc-single-file-component)
    - [Plain JavaScript](#plain-javascript)
  - [[Components Basics] Using a Comnonent](#components-basics-using-a-comnonent)
  - [[Components Basics] Passing Props](#components-basics-passing-props)
    - [using `<script setup>`](#using-script-setup)
    - [not using `<script setup>`](#not-using-script-setup)
  - [[Components Basics] Listening to Events](#components-basics-listening-to-events)
    - [using `<script setup>`](#using-script-setup-1)
    - [not using `<script setup>`](#not-using-script-setup-1)
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
## [Components Basics] [Defining a Component](https://vuejs.org/guide/essentials/component-basics.html#defining-a-component)

### SFC (Single File Component)
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

### Plain JavaScript

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

## [Components Basics] [Using a Comnonent](https://vuejs.org/guide/essentials/component-basics.html#using-a-component)

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

## [Components Basics] [Passing Props](https://vuejs.org/guide/essentials/component-basics.html#passing-props)

### using `<script setup>`

```vue
<!-- BlogPost.vue -->
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```

`defineProps` is a compile-time macro that is only **available inside `<script setup>`** and **does not need to be explicitly imported**.

> defineProps
> - `<script setup>` 내부에서만 유효
> - import가 필요 없음

<br>

Declared props are automatically exposed to the template. **`defineProps` also returns an object that contains all the props passed to the component,** so that we can access them in JavaScript if needed:

```js
const props = defineProps(['title'])
console.log(props.title)
```

> `defineProps` 는 컴포넌트에 전달된 모든 props를 포함하는 object를 리턴한다.

<br>

### not using `<script setup>`
```js
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```

## [Components Basics] Listening to Events

### using `<script setup>`

```vue
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```

```vue
<!-- BlogPost.vue, omitting <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<script setup>
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>
```

Similar to defineProps, defineEmits is also only usable in `<script setup>` and doesn't need to be imported. 

**It returns an `emit` function that can be used to emit events in JavaScript code:**

```js
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
```

<br>

### not using `<script setup>`

If you are not using `<script setup>`, you can declare emitted events using the `emits` option. 

You can access the `emit` function as a property of the **setup context (passed to setup() as the second argument)**:


```js
export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
```