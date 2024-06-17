<template>
  <div style="margin: 24px 0" />
  <j-typography-paragraph v-model:content="editContent" editable></j-typography-paragraph>
  <div style="margin: 24px 0" />
  <j-typography-paragraph v-model:content="copyContent" copyable></j-typography-paragraph>
</template>
<script setup>
import { ref } from "vue";
import JTypographyParagraph from "../lib/typography/Paragraph.vue";
const editContent = ref("这是个可编辑文本.");
const copyContent = ref("这是可复制的内容.");

</script>
