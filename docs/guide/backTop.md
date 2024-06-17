<script setup>
   import BacktopDemo1 from '../components/backtop-demo-1.vue'
   import BacktopDemo2 from '../components/backtop-demo-2.vue'
</script>
# BackTop &nbsp;回到顶部

> 点击元素，回到顶部

## 基础用法

### 预览

<backtop-demo-1 />
<backtop-demo-2 />

### 代码
``` vue
<template>
  <div class="icon-demo">
    <div class="block">
      占位
    </div>
    <j-back-top></j-back-top>
  </div>
</template>

<template>
  <div class="icon-demo">
    <j-back-top :right="30" :bottom="100" visibility-height="500">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
          text-align: center;
          line-height: 40px;
          color: #10b981;
        "
      >
        Top
      </div></j-back-top
    >
  </div>
</template>
```