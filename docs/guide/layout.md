---
prev: false
next: false
---

<script setup>
    import LayoutDemo1 from '../components/layout-demo-1.vue'
    import LayoutDemo2 from '../components/layout-demo-2.vue'
    import LayoutDemo3 from '../components/layout-demo-3.vue'

</script>

# Layout &nbsp;布局

 >协助进行页面级整体布局。

## 无侧边栏布局

### 预览

 <layout-demo-1 />

### 代码

```vue
<template>
  <j-layout class="wrapper">
    <j-header
      class="custom"
      style="height: 50px; background-color: rgba(16, 185, 129, 0.7)"
      >header</j-header
    >
    <j-content
      class="custom"
      style="height: 100px; background: rgba(16, 185, 129, 1)"
      >content</j-content
    >
    <j-footer
      class="custom"
      style="height: 50px; background: rgba(16, 185, 129, 0.7)"
      >footer</j-footer
    >
  </j-layout>
</template>
<script lang="ts" setup>
import JLayout from "../lib/layout/Layout.vue";
import JHeader from "../lib/layout/Header.vue";
import JContent from "../lib/layout/Content.vue";
import JFooter from "../lib/layout/Footer.vue";
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  color: white;
  margin: 10px 0 10px;
  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

```

## 内容含侧边栏布局

### 预览

 <layout-demo-2 />

### 代码

 ```html
   <j-layout class="wrapper">
    <j-header
      class="custom"
      style="height: 50px; background: rgba(16, 185, 129, 0.6)"
      >header</j-header
    >
    <j-layout>
      <j-sider
        class="custom"
        style="height: 100px; background: rgba(16, 185, 129, 0.8); width: 200px"
      >
        slider
      </j-sider>
      <j-content
        class="custom"
        style="height: 100px; background: rgba(16, 185, 129, 1)"
        >content</j-content
      >
    </j-layout>

    <j-footer
      class="custom"
      style="height: 50px; background: rgba(16, 185, 129, 0.6)"
      >footer</j-footer
    >
  </j-layout>
 ```

## 含侧边栏布局

### 预览

 <layout-demo-3 />

### 代码

 ```html
   <j-layout class="wrapper">
    <j-sider class="custom" style="background: rgba(16, 185, 129, 0.8); width: 200px"
      >sider</j-sider
    >
    <j-layout>
      <j-header
        class="custom"
        style="height: 50px; background: rgba(16, 185, 129, 0.6)"
        >header</j-header
      >
      <j-content
        class="custom"
        style="height: 100px; background: rgba(16, 185, 129, 1)"
        >content</j-content
      >
      <j-footer
        class="custom"
        style="height: 50px; background: rgba(16, 185, 129, 0.6)"
        >footer</j-footer
      >
    </j-layout>
  </j-layout>
 ```
