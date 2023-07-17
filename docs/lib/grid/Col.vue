<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup="props">
import { computed, inject } from "vue";

const props = defineProps<{
  span?: number | string;
  offset?: number | string;
}>();
const gutter = inject<string | number>("childV");

const createClasses = (obj) => {
  if (!obj) {
    return [];
  }
  let array = [];
  if (obj.span) {
    array.push(`col-${obj.span}`);
  }
  if (obj.offset) {
    array.push(`offset-${obj.offset}`);
  }
  return array;
};
const { span, offset } = props;

const colClass = computed(() => {
  return createClasses({ span, offset });
});
const colStyle = computed(() => {
  return {
    paddingLeft: gutter / 2 + "px",
    paddingRight: gutter / 2 + "px",
  };
});
</script>
<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
