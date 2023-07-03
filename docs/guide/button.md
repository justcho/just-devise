---
layout: doc
---

<script setup>
  import ButtonDemo from '../components/buttonDemo.vue'
</script>

# Button &nbsp;按钮

> 按钮用于开始一个即时操作
## 基本使用

<ButtonDemo />

### 代码
``` vue

<template>
  <h2>示例1</h2>
  <div class="demo-p">
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h2>示例2</h2>
  <div class="demo-p">
    <Button>normal</Button>
    <Button size="big">big</Button>
    <Button size="small">small</Button>
  </div>
  <h2>示例3</h2>
  <div class="demo-p">
    <Button>normal</Button>
    <Button level="main">main</Button>
    <Button level="warning">warning</Button>
    <Button level="danger">danger</Button>
  </div>
  <h2>示例4</h2>
  <div class="demo-p">
    <Button>normal</Button>
    <Button disabled>disabled</Button>
  </div>
  <h2>示例5</h2>
  <div class="demo-p">
    <Button loading>loading</Button>
    <Button>done</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>

```