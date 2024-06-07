<template>
  <div class="icon-demo">
    <j-back-top :right="30" :bottom="100" :visibilityHeight="500">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
          text-align: center;
          line-height: 40px;
          color: #10b981;
        "
      >
        Top
      </div></j-back-top
    >
  </div>
</template>
<script setup lang="ts">
import JBackTop from "../lib/BackTop.vue";
</script>
<style>
.block {
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-color: #10b981;
  color: #fff;
}
</style>
