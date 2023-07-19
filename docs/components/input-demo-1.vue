<template>
  <j-input class="custom" />
  <j-input value="禁用" disabled class="custom" />
  <j-input value="只读" readonly class="custom" />
</template>
<script setup>
import JInput from "../lib/Input.vue";
</script>
<style lang="scss">
.custom {
  padding: 0 5px;
}
</style>
