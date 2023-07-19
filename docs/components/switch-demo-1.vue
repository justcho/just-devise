<template>
  <j-switch v-model:value="bool" />
</template>
<script setup>
import JSwitch from "../lib/Switch.vue";
import { ref } from "vue";
const bool = ref(false);
</script>
