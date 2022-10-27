// 1) global register
// - main.js
const app = createApp(App);
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});

// - Usage
// <input type="text" v-focus />

// 2) register in component
// MyComponent.vue
export default {
  directive: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
