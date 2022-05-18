<template>
  <slot name="label"></slot>
  <el-checkbox-group :modelValue="selected" @change="onCheckboxChanged">
    <el-checkbox-button v-for="option in options" :key="option" :label="option">
      {{ option }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: [],
    },
    options: {
      type: Array as PropType<string[]>,
      requred: true,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const selected = computed<string[]>(() => props.modelValue);

    const onCheckboxChanged = (selected: string[]) => {
      emit('change', selected);
      emit('update:modelValue', selected);
    };

    return {
      selected,
      onCheckboxChanged,
    };
  },
});
</script>
