<template>
  <div class="demo-p">
    <j-button theme="button">normal</j-button>
    <j-button theme="button" size="big">big</j-button>
    <j-button theme="button" size="small">small</j-button>
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
