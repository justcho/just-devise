<template>
  <div class="demo-p">
    <j-button theme="button">normal</j-button>
    <j-button theme="link">link</j-button>
    <j-button theme="text">text</j-button>
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
