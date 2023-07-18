<template>
  <svg class="j-icon">
    <use :xlink:href="`#j-${name}`"></use>
  </svg>
</template>
<script lang="ts" setup>
import "./svg.js";
const props = defineProps<{
  name: string;
}>();
</script>
<style lang="scss">
.j-icon {
  width: 1em;
  height: 1em;
}
</style>
