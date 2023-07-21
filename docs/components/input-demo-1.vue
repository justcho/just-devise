<template>
  <j-input placeholder="请输入" class="custom" />
  <j-input error="error" value="错误状态" class="custom" />
  <j-input value="只读" readonly class="custom" />
  <j-input value="禁用" disabled class="custom" />
</template>
<script setup>
import JInput from "../lib/Input.vue";
</script>
<style lang="scss">
.custom {
  padding: 10px 5px 0;
}
</style>
