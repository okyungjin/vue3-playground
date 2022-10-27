<template>
  <h1>{{ fetchedMessage }}</h1>
  <p>await in script setup!</p>
</template>

<script setup lang="ts">
import { fetchSth } from '../api';

const fetchedMessage = await fetchSth();
</script>
