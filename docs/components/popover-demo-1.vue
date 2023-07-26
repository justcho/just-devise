<template>
  <j-popover>
    <j-button>上方弹出</j-button>
    <template slot="content"> 弹出内容 </template>
  </j-popover>
</template>
<script setup>
import JPopover from "../lib/Popover.vue";
import JButton from "../lib/Button.vue";
</script>
<style lang="scss" scoped></style>
