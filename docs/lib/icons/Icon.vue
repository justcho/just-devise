<template>
  <svg class="j-icon">
    <use :xlink:href="`#j-${name}`"></use>
  </svg>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
const props = defineProps<{
  name: string;
}>();

onMounted(() => {
  import("./svg");
});
</script>
<style lang="scss">
.j-icon {
  width: 1em;
  height: 1em;
}
</style>
