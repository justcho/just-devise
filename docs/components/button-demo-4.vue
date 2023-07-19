<template>
  <div class="demo-p">
    <j-button theme="text" disabled>disabled</j-button>
    <j-button theme="button" disabled>disabled</j-button>
  </div>
</template>
<script setup>
import JButton from "../lib/Button.vue";
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>
