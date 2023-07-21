<template>
  <j-input
    type="textarea"
    value="input"
    placeholder="请输入内容"
    auto-size
    class="custom"
  />
</template>
<script setup>
import { ref } from "vue";
import JInput from "../lib/Input.vue";
</script>
<style lang="scss">
.custom {
  padding: 10px 5px 0;
}
</style>
