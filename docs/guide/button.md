---
prev: false
next: false
---

<script setup>
  import ButtonDemo1 from '../components/button-demo-1.vue'
  import ButtonDemo2 from '../components/button-demo-2.vue'
  import ButtonDemo3 from '../components/button-demo-3.vue'
  import ButtonDemo4 from '../components/button-demo-4.vue'
  import ButtonDemo5 from '../components/button-demo-5.vue'

</script>

# Button &nbsp;按钮

> 按钮用于开始一个即时操作
>
## 按钮类型

### 展示

<button-demo-1 />

### 代码

``` vue
<template>
  <div class="demo-p">
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>

```

## 按钮尺寸

### 展示

<button-demo-2 />

### 代码

```vue
<template>
  <div class="demo-p">
    <Button theme="button">normal</Button>
    <Button theme="button" size="big">big</Button>
    <Button theme="button" size="small">small</Button>
  </div>
</template>
```

## 按钮风格

### 展示

<button-demo-3 />

### 代码

```vue
<template>
  <div class="demo-p">
    <Button>normal</Button>
    <Button theme="button" level="main">main</Button>
    <Button theme="button" level="warning">warning</Button>
    <Button theme="button" level="danger">danger</Button>
  </div>
</template>
```

## 不可用状态

### 展示

<button-demo-4 />

### 代码

```vue
<template>
  <div class="demo-p">
    <Button theme="text" disabled>disabled</Button>
    <Button theme="button" disabled>disabled</Button>
  </div>
</template>
```

## 加载中

### 展示

<button-demo-5 />

### 代码

```vue
<template>
  <div class="demo-p">
    <Button loading></Button>
    <Button loading>loading</Button>
  </div>
</template>
```
