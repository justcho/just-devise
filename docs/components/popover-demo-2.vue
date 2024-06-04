<template>
  <div class="trigger">
    <j-popover position="left" :trigger="'click'">
      <template #content> 弹出内容 </template>
      <j-button>click</j-button>
    </j-popover>
    <j-popover position="right" :trigger="'hover'">
      <template #content> 弹出内容 </template>
      <j-button>hover</j-button>
    </j-popover>
  </div>
</template>
<script setup>
import JPopover from "../lib/Popover.vue";
import JButton from "../lib/Button.vue";
import { ref } from "vue";
const visible = ref(false);
</script>
<style lang="scss" scoped>
.trigger{
  margin-top: 20px;
  width: 150px;
  display: flex;
  justify-content: space-around;
}
</style>
