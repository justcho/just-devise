---
prev: false
next: false
---
<script setup>
import DialogDemo1 from '../components/dialog-demo-1.vue'
import DialogDemo2 from '../components/dialog-demo-2.vue'

</script>

# Dialog &nbsp;对话框

> 在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本用法

### 展示

<br />
<dialog-demo-1 />

### 代码

```vue
<template>
  <j-button theme="button" level="main" @click="toggle">开启对话框</j-button>
  <j-dialog
    v-model:visible="open"
    :closeOnclickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 基本用法 </template>
    <template v-slot:content>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </template>
  </j-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const open = ref(false);
const toggle = () => {
  open.value = !open.value;
};
const f1 = () => {
  open.value = !open.value;
};
const f2 = () => {
  open.value = !open.value;
};
</script>
```

## 开启遮罩关闭

### 展示

<br />
<dialog-demo-2 />

### 代码

```vue
<template>
  <j-button theme="button" @click="toggle">开启对话框</j-button>
  <j-dialog
    v-model:visible="open"
    :closeOnclickOverlay="true"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 遮罩关闭 </template>
    <template v-slot:content>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </template>
  </j-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const open = ref(false);
const toggle = () => {
  open.value = !open.value;
};
const f1 = () => {
  open.value = !open.value;
};
const f2 = () => {
  open.value = !open.value;
};
</script>
```
