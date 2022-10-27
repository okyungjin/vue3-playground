<template>
  <div>
    <p v-pin="position">페이지 고정 영역</p>
  </div>
</template>

<script>
export default {
  directives: {
    pin: {
      mounted(el, binding) {
        el.style = {
          position: 'fixed',
          top: `${binding.value.top}px`,
          left: `${binding.value.top}px`,
        };
      },
    },
  },
  data() {
    return {
      position: {
        top: 50,
        left: 100,
      },
    };
  },
});
</script>
