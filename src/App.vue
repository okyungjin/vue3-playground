<template>
  <h1>Vue3 Code Snippets</h1>
  <Watch></Watch>
</template>

<script>
import Watch from './watchers/Watch.vue';

export default {
  name: 'App',
  components: {
    Watch
  }
}
</script>