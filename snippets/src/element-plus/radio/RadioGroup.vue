<template>
  <CommonRadio
    :type="$attrs.type"
    v-model="selectedRadio"
    v-for="option in options"
    :key="option"
    :value="option"
    @change="handleRadioChange"
  >
    {{ option }}
  </CommonRadio>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import CommonRadio from './CommonRadio.vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string | null>,
      default: null,
    },
    options: {
      type: Array as PropType<string[]>,
      requred: true,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const selectedRadio = ref<string | null>(props.modelValue);

    const handleRadioChange = (value: string) => {
      selectedRadio.value = value;

      emit('change', value);
      emit('update:modelValue', value);
    };

    return {
      selectedRadio,
      handleRadioChange,
    };
  },
  components: {
    CommonRadio,
  },
});
</script>
