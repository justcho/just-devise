---
prev: false
next: false
---

<script setup>
  import GridDemo1 from '../components/grid-demo-1.vue'
  import GridDemo2 from '../components/grid-demo-2.vue'
  import GridDemo3 from '../components/grid-demo-3.vue'

</script>

# Grid &nbsp;栅格

 >24 栅格系统。

## 24格栅格

### 展示

<grid-demo-1 />

### 代码

```vue
<template>
  <j-row class="demoRow">
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
  </j-row>
  <j-row class="demoRow">
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
  </j-row>
  <j-row class="demoRow">
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4">
      <div class="demoCol">4</div>
    </j-col>
  </j-row>
</template>
```

## 设置gutter

### 预览

<grid-demo-2 />

### 代码

```vue
<template>
  <j-row class="demoRow" gutter="10">
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
  </j-row>
  <j-row class="demoRow" gutter="20">
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6">
      <div class="demoCol">6</div>
    </j-col>
  </j-row>
</template>


```

## 设置空隙

### 预览

<grid-demo-3 />

### 代码

```vue
<template>
  <j-row class="demoRow" gutter="10">
    <j-col span="8">
      <div class="demoCol">8</div>
    </j-col>
    <j-col span="8" offset="8">
      <div class="demoCol">8</div>
    </j-col>
  </j-row>
  <j-row class="demoRow" gutter="10">
    <j-col span="6" offset="6">
      <div class="demoCol">6</div>
    </j-col>
    <j-col span="6" offset="6">
      <div class="demoCol">6</div>
    </j-col>
  </j-row>
  <j-row class="demoRow" gutter="10">
    <j-col span="4" offset="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4" offset="4">
      <div class="demoCol">4</div>
    </j-col>
    <j-col span="4" offset="4">
      <div class="demoCol">4</div>
    </j-col>
  </j-row>
</template>


```
