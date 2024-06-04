<template>
  <div class="top">
    <j-popover position="top" trigger="click">
      <template #content> 弹出内容 </template>
      <j-button>top</j-button>
    </j-popover>
  </div>
  <div class="middle">
    <j-popover position="left" trigger="click">
      <template #content> 弹出内容 </template>
      <j-button>left</j-button>
    </j-popover>
    <j-popover position="right" trigger="click">
      <template #content> 弹出内容 </template>
      <j-button>right</j-button>
    </j-popover>
  </div>
  <div class="bottom">
    <j-popover position="bottom" trigger="click">
      <template #content> 弹出内容 </template>
      <j-button>bottom</j-button>
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
.top{
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}
.bottom{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
