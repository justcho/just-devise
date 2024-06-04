<template>
  <div class="trigger">
    <j-popover v-model:visible="visible">
      <template #content>
        弹出内容 <j-button level="main" @click="close">close</j-button>
      </template>
      <j-button>点击</j-button>
    </j-popover>
  </div>
</template>
<script setup>
import JPopover from "../lib/Popover.vue";
import JButton from "../lib/Button.vue";
import { ref } from "vue";
const visible = ref(false);

function close() {
  visible.value = false;
}
</script>
<style lang="scss" scoped>
.trigger {
  margin-top: 20px;
}
</style>
