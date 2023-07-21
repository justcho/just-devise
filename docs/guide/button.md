
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

### 预览

<button-demo-1 />

### 代码

``` vue
<template>
  <div class="demo-p">
    <j-button theme="button">normal</j-button>
    <j-button theme="link">link</j-button>
    <j-button theme="text">text</j-button>
  </div>
</template>
```

## 按钮尺寸

### 预览

<button-demo-2 />

### 代码

```vue
<template>
  <div class="demo-p">
    <j-button theme="button">normal</j-button>
    <j-button theme="button" size="big">big</j-button>
    <j-button theme="button" size="small">small</j-button>
  </div>
</template>
```

## 按钮风格

### 预览

<button-demo-3 />

### 代码

```vue
<template>
  <div class="demo-p">
    <j-button>normal</j-button>
    <j-button theme="button" level="main">main</j-button>
    <j-button theme="button" level="warning">warning</j-button>
    <j-button theme="button" level="danger">danger</j-button>
  </div>
</template>
```

## 不可用状态

### 预览

<button-demo-4 />

### 代码

```vue
<template>
  <div class="demo-p">
    <j-button theme="text" disabled>disabled</j-button>
    <j-button theme="button" disabled>disabled</j-button>
  </div>
</template>
```

## 加载中

### 预览

<button-demo-5 />

### 代码

```vue
<template>
  <div class="demo-p">
    <j-button loading></j-button>
    <j-button loading>loading</j-button>
  </div>
</template>
```
