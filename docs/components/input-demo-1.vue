<template>
  <j-input class="custom" />
  <j-input value="禁用" disabled class="custom" />
  <j-input value="只读" readonly class="custom" />
</template>
<script lang="ts" setup>
import { JInput } from "just-devise";
</script>
<style lang="scss">
.custom {
  padding: 0 5px;
}
</style>
