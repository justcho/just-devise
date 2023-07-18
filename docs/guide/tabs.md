---
prev: false
next: false
---
<script setup>
import TabsDemo from '../components/tabs-demo.vue'
</script>

# Tabs &nbsp;标签页

 >选项卡切换组件

## 基本用法

### 展示

<tabs-demo/>

### 代码

```vue
<template>
  <div>
    <j-tabs v-model:selected="select">
      <j-tab title="导航">导航</j-tab>
      <j-tab title="选项卡自适应">选项卡自适应</j-tab>
    </j-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const select = ref("选项卡自适应");
</script>
```
