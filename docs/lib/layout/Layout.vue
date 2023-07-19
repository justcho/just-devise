<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, ref, onMounted } from "vue";
const layoutClass = ref({ hasSider: false });
const slots = useSlots();

onMounted(() => {
  if (slots && slots.default) {
    slots.default().forEach((vn: VNode) => {
      if (vn.type.name === "JustdSider") {
        layoutClass.value.hasSider = true;
      }
    });
  }
});
</script>
<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  // 这种是嵌套的
  &.hasSider {
    flex-direction: row;
  }
}
</style>
