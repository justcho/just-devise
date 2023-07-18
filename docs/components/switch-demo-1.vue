<template>
  <j-switch v-model:value="bool" />
</template>
<script lang="ts" setup>
import { JSwitch } from "just-devise";
import { ref } from "vue";
const bool = ref(false);
</script>
