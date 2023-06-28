---
layout: doc
---

<script setup>
import switchDemo from '../components/switchDemo.vue'
</script>

# Button

## 常规用法

### 预览
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
