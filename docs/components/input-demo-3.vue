<template>
  <j-input v-model:value="inputValue" placeholder="请输入内容" class="custom" />
  <div class="show">value: {{ inputValue }}</div>
</template>
<script setup>
import { ref } from "vue";
import JInput from "../lib/Input.vue";
const inputValue = ref("1");
</script>
<style lang="scss" scoped>
.custom {
  padding: 10px 5px 0;
}
.show {
  padding: 10px;
  width: 100%;
  word-break: break-all
}
</style>
