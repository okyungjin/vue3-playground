<template>
  <h2>Options API</h2>
  <div>
    <p>{{ optCount }}</p>
    <button @click="optCount++">Increase count</button>
  </div>

  <h2>Composition API</h2>
  <div>
    <p>{{ compCount1 }}</p>
    <button @click="compCount1++">Increase count1</button>
  </div>
  <div>
    <p>{{ compCount2 }}</p>
    <button @click="compCount2++">Increase count2</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';

export default {
  // Options API
  data() {
    return {
      optCount: 0,
    };
  },
  watch: {
    optCount(cur, prev) {
      console.log(`Options API watch : ${prev} ==> ${cur}`);
    },
  },
  // Composition API
  setup() {
    const compCount1 = ref(0);
    const compCount2 = ref(0);
    const state = ref('실행 중');

    watch(
      compCount1,
      (cur, prev) => console.log(`Composition API watch : ${prev} => ${cur}`),
      { immediate: true },
    );

    watch([compCount1, compCount2], (cur, prev) => {
      console.log(`Composition API multiple watch: ${prev} => ${cur}`);
    });

    const stop = watchEffect(
      () => console.log(`Composition API watchEffect Called ${compCount2.value}`),
      { flush: 'post' },
    );

    const onStop = () => {
      state.value = '중지';
      stop();
    };

    return {
      compCount1,
      compCount2,
      state,
      onStop,
    };
  },
};
</script>
