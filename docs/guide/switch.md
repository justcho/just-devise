---
layout: doc
---

<script setup>
import switchDemo from '../components/switchDemo.vue'
</script>

# Switch &nbsp;开关

 >开关选择器

## 何时使用

 需要表示开关状态/两种状态之间的切换时；

## 基本用法

<br>

<switchDemo />

### 代码

``` vue
<template>
<Switch v-model:value="bool" />
</template>

<script lang="ts">
import {
  Switch
} from '../lib/index'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
```
