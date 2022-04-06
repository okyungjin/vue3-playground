<template>
  <h2>Options API</h2>
  <div>
    <p>{{ opt_count }}</p>
    <button @click="opt_count++">Increase count</button>
  </div>

  <h2>Composition API</h2>
  <div>
    <p>{{ comp_count1 }}</p>
    <button @click="comp_count1++">Increase count1</button>
  </div>
  <div>
    <p>{{ comp_count2 }}</p>
    <button @click="comp_count2++">Increase count2</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';

export default {
  // Options API
  data() {
    return {
      opt_count: 0,
		}
	},
  watch: {
    opt_count(cur, prev) {
			console.log(`Options API watch : ${prev} ==> ${cur}`);
    },
  },
  // Composition API
  setup() {
    const comp_count1 = ref(0);
    const comp_count2 = ref(0);
    const state = ref('실행 중');

    watch(
      comp_count1,
      (cur, prev) => console.log(`Composition API watch : ${prev} => ${cur}`),
      {immediate: true},
    );

    watch([comp_count1, comp_count2], (cur, prev) => {
      console.log(`Composition API multiple watch: ${prev} => ${cur}`);
    });

    const stop = watchEffect(
      () => console.log(`Composition API watchEffect Called ${comp_count2.value}`),
      {flush: 'post'},
    );

    const onStop = () => {
      state.value = '중지';
      stop();
    }

    return {
      comp_count1,
      comp_count2,
      state,
      onStop,
    }
  }
}
</script>