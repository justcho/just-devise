<template>
  <j-input
    type="textarea"
    placeholder="根据内容行数自适应高度"
    auto-size
    class="custom"
  />

  <j-input
    type="textarea"
    placeholder="限制内容行数自适应高度"
    :auto-size="{ minRows: 2, maxRows: 4 }"
    class="custom"
  />
</template>
<script setup>
import JInput from "../lib/Input.vue";
</script>
<style lang="scss">
.custom {
  padding: 10px 5px 0;
}
</style>
