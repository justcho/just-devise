<template>
  <svg class="justd-icon">
    <use :xlink:href="`#j-${name}`" :fill="color"></use>
  </svg>
</template>
<script lang="ts" setup>
// import "./svg.js";
import { onMounted } from "vue";
const props = defineProps<{
  name: string;
  color: string;
}>();

onMounted(() => {
  import("./svg");
});
</script>
<style lang="scss">
.justd-icon {
  width: 1em;
  height: 1em;
}
</style>
