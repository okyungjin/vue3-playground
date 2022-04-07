<template>
  <CustomButton sm>Custom Button</CustomButton>
  <CustomButton>Custom Button</CustomButton>
  <CustomButton lg background-white>Custom Button</CustomButton>
  <CustomButton sm pill text-red background-black>Custom Button</CustomButton>
  <CustomButton md pill text-green background-blue>Custom Button</CustomButton>
  <CustomButton lg pill text-white background-green>Custom Button</CustomButton>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'CustomButtonTest',
  components: { CustomButton },
};
</script>
