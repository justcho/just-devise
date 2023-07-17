<template>
  <div class="demo-p">
    <Button>normal</Button>
    <Button theme="button" level="main">main</Button>
    <Button theme="button" level="warning">warning</Button>
    <Button theme="button" level="danger">danger</Button>
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
