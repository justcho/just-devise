<template>
  <div class="demo-p">
    <Button theme="text" disabled>disabled</Button>
    <Button theme="button" disabled>disabled</Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>
