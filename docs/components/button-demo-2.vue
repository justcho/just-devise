<template>
  <div class="demo-p">
    <Button theme="button">normal</Button>
    <Button theme="button" size="big">big</Button>
    <Button theme="button" size="small">small</Button>
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
