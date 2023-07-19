<template>
  <div>
    <h2 v-if="level === 2"><slot></slot></h2>
    <h3 v-else-if="level === 3"><slot></slot></h3>
    <h4 v-else-if="level === 4"><slot></slot></h4>
    <h5 v-else-if="level === 5"><slot></slot></h5>
    <h1 v-else><slot></slot></h1>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  level: number;
}>();
</script>
