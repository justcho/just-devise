<template>
  <j-row class="demoRow" :gutter="10">
    <j-col :span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col :span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col :span="8">
      <div class="demoCol">8</div>
    </j-col>
  </j-row>
  <j-row class="demoRow" :gutter="20">
    <j-col :span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col :span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col :span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col :span="6">
      <div class="demoCol">6</div>
    </j-col>
  </j-row>
</template>
<script setup>
import JRow from "../lib/grid/Row.vue";
import JCol from "../lib/grid/Col.vue";
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #fff;
  background: rgba(#10b981, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
