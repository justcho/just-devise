---
prev: false
next: false
---

<script setup>
  import IconDemo from '../components/icon-demo.vue'

</script>

# Icon &nbsp;图标

> 语义化的矢量图形

## 展示

<icon-demo />

## 代码

```vue
<template>
  <div class="icon-demo">
    <div class="icon-demo-item" v-for="i in list">
      <j-icon :name="i"></j-icon>
      <p>{{ i }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import JIcon from "../lib/icons/Icon.vue";
const list = ref<string[]>([
  "star",
  "search",
  "message",
  "thumbs",
  "cue",
  "navigation",
  "settings",
  "out",
  "fail",
  "time",
]);
</script>
```
