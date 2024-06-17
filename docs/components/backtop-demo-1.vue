<template>
  <div class="icon-demo">
    <div class="block">
      占位，往下滑
    </div>
    <j-back-top></j-back-top>
  </div>
</template>
<script setup lang="ts">
import JBackTop from "../lib/BackTop.vue";
</script>
<style>
.block{
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-color: #10b981;
  color: #fff;
}
</style>