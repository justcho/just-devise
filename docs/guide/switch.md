---
prev: false
next: false
---

<script setup>
import SwitchDemo1 from '../components/switch-demo-1.vue'
import SwitchDemo2 from '../components/switch-demo-2.vue'

</script>

# Switch &nbsp;开关

 >开关选择器

## 何时使用

 需要表示开关状态/两种状态之间的切换时

## 基本用法

### 展示

<switch-demo-1 />

### 代码

``` vue
<template>
  <j-switch v-model:value="bool" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const bool = ref(false);
</script>

```

## 锁定状态

### 展示

<switch-demo-2 />

### 代码

```vue
<template>
  <j-switch disabled />
</template>
```
