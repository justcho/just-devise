<template>
  <div class="demo-p">
    <j-button theme="text" disabled>disabled</j-button>
    <j-button theme="button" disabled>disabled</j-button>
  </div>
</template>
<script lang="ts" setup>
import { JButton } from "just-devise";
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>
