<template>
  <el-radio
    :class="classForRadioButton"
    :label="value"
    v-model="currentValue"
    @click="handleRadioClick"
  >
    <slot></slot>
  </el-radio>
</template>

<script lang="ts">
import { PropType, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string | null>,
      default: null,
    },
    value: {
      type: String as PropType<string | null>,
      required: true,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { attrs, emit }) {
    const currentValue = ref<string | null>(null);

    const isButtonType = attrs.type === 'button';
    const classForRadioButton = isButtonType ? 'el-radio-button' : null;

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      }
    );

    const handleRadioClick = (event: PointerEvent) => {
      const target = event.target as HTMLInputElement;

      if (target.tagName !== 'INPUT') return;
      const valueOfInputTag = target.value;

      currentValue.value =
        currentValue.value === valueOfInputTag ? null : valueOfInputTag;

      emit('change', currentValue.value);
      emit('update:modelValue', currentValue.value);
    };

    return {
      currentValue,
      classForRadioButton,
      handleRadioClick,
    };
  },
});
</script>
