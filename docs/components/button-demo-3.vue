<template>
  <div class="demo-p">
    <j-button>normal</j-button>
    <j-button theme="button" level="main">main</j-button>
    <j-button theme="button" level="warning">warning</j-button>
    <j-button theme="button" level="danger">danger</j-button>
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
