<template>
  <j-layout class="wrapper">
    <j-sider class="custom" style="background: rgba(16, 185, 129, 0.8); width: 200px"
      >sider</j-sider
    >
    <j-layout>
      <j-header
        class="custom"
        style="height: 50px; background: rgba(16, 185, 129, 0.6)"
        >header</j-header
      >
      <j-content
        class="custom"
        style="height: 100px; background: rgba(16, 185, 129, 1)"
        >content</j-content
      >
      <j-footer
        class="custom"
        style="height: 50px; background: rgba(16, 185, 129, 0.6)"
        >footer</j-footer
      >
    </j-layout>
  </j-layout>
</template>
<script lang="ts" setup>
import JLayout from "../lib/layout/Layout.vue";
import JHeader from "../lib/layout/Header.vue";
import JContent from "../lib/layout/Content.vue";
import JFooter from "../lib/layout/Footer.vue";
import JSider from "../lib/layout/Sider.vue";
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  color: white;
  margin: 10px 0 10px;
  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
