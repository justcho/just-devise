<template>
  <j-layout class="wrapper">
    <j-header
      class="custom"
      style="height: 50px; background-color: rgba(16, 185, 129, 0.7)"
      >header</j-header
    >
    <j-content
      class="custom"
      style="height: 100px; background: rgba(16, 185, 129, 1)"
      >content</j-content
    >
    <j-footer
      class="custom"
      style="height: 50px; background: rgba(16, 185, 129, 0.7)"
      >footer</j-footer
    >
  </j-layout>
</template>
<script setup>
import JLayout from "../lib/layout/Layout.vue";
import JHeader from "../lib/layout/Header.vue";
import JContent from "../lib/layout/Content.vue";
import JFooter from "../lib/layout/Footer.vue";
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  color: white;
  margin: 10px 0 10px;
  .custom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
