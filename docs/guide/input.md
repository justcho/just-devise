
<script setup>
  import InputDemo1 from '../components/input-demo-1.vue'
  import InputDemo2 from '../components/input-demo-2.vue'
  import InputDemo3 from '../components/input-demo-3.vue'
  import InputDemo4 from '../components/input-demo-4.vue'
</script>

# Input &nbsp;输入框

> 通过鼠标或键盘输入内容。

## 基本用法

### 预览

<input-demo-1 />

### 代码

```vue
<template>
  <j-input placeholder="请输入" class="custom" />
  <j-input error="error" value="错误状态" class="custom" />
  <j-input value="只读" readonly class="custom" />
  <j-input value="禁用" disabled class="custom" />
</template>
```

## 密码框

### 预览

<input-demo-2 />

### 代码

```vue
<template>
  <j-input type="password" placeholder="请输入密码" class="custom" />
</template>
```

## 双向绑定

### 预览

<input-demo-3 />

### 代码

```vue
<template>
  <j-input v-model:value="inputValue" placeholder="请输入内容" class="custom" />
  <div class="show">value: {{ inputValue }}</div>
</template>
<script setup>
import { ref } from "vue";
import JInput from "justd";
const inputValue = ref("1");
</script>
```

## 适应文本高度的文本域

### 预览

<input-demo-4 />

### 代码

```vue
<j-input type="textarea" placeholder="请输入内容" auto-size class="custom" />
<j-input
    type="textarea"
    placeholder="请输入内容"
    :auto-size="{ minRows: 2, maxRows: 4 }"
    class="custom"
/>
```
