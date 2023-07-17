<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup="props, { slots }">
import { computed, provide } from "vue";
const props = defineProps<{
  gutter?: number | string;
  align?: "left" | "right" | "center";
}>();
let { gutter, align } = props;

provide("childV", gutter);

const rowStyle = computed(() => {
  return {
    marginLeft: -gutter / 2 + "px",
    marginRight: -gutter / 2 + "px",
  };
});

const rowClass = computed(() => {
  return {
    [`align-${align}`]: align,
  };
});
</script>
<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
