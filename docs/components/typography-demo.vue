<template>
  <j-typography-paragraph :content="text"></j-typography-paragraph>
</template>
<script setup>
import { ref } from "vue";
import JTypographyParagraph from "../lib/typography/Paragraph.vue";
const text = ref('文章内容文章内容')
</script>
