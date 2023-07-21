<template>
  <div class="justd-paragraph">
    <p>{{ content }}</p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  editable: boolean;
  copyable: boolean;
  content: string;
}>();
</script>
<style lang="scss">
.justd-paragraph {
  > p {
    font-size: 14px;
  }
}
</style>
