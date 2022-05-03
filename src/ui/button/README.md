
# CustomButton

- [CustomButton](#custombutton)
  - [소개](#소개)
  - [DEV Notes](#dev-notes)
    - [v-bind="$attrs"](#v-bindattrs)
    - [Proxy 변수](#proxy-변수)


## 소개
`slot`을 사용하여 커스텀이 가능하도록 만든 button 컴포넌트이다.

<img width="600" alt="스크린샷 2022-04-07 오후 5 01 23" src="https://user-images.githubusercontent.com/31913666/162151467-e325b46f-ac4d-4e6e-9345-73a00c96bfbb.png">


## DEV Notes 
### v-bind="$attrs" 
```html
<!-- CustomButton.vue -->
<button v-bind="$attrs" :type="type" :class="classes" ref="button">
  <slot></slot>
</button>
```
`v-bind="$attrs`는 non-prop의 모든 속성을 그대로 button 엘리먼트에 넘겨주겠다는 의미이다.
`$attrs`는 props에 정의되지 않은 속성을 의미한다.

이는 CustomButton 컴포넌트에서 사용되는 모든 속성을 props로 정의하지 않고 button에 전달할 수 있다.

예를 들어 `<CustomButton name="reset">`으로 지정되어 있으면 `<button>` 에도 name 속성이 reset으로 전달된다.


### Proxy 변수
Vue 3에서 `ref()`나 `reactive()`를 이용해 양방향 결합이 가능하게 만든 변수를 **Proxy 변수**라고 한다.

만약 `ref()`로 만든 프록시 변수명이 HTML 엘리먼트의 ref 속성값과 동일하다면,
해당 변수는 HTML 엘리먼트를 가리킨다.

```html
<template>
  <button ref="button"></button>
</template>

<script
export default {
  setup() {
    const button = ref(null);
  }
}
</script>
```
