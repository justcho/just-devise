<script setup>
  import PopoverDemo1 from "../components/popover-demo-1.vue"
  import PopoverDemo2 from "../components/popover-demo-2.vue"
  import PopoverDemo3 from "../components/popover-demo-3.vue"
</script>

# Popover &nbsp;气泡弹出层

> 点击元素，弹出气泡式的确认框

## 不同位置展示

### 预览

<popover-demo-1 />

### 代码

```vue
<template>
  <div class="top">
    <j-popover position="top">
      <template #content> 弹出内容 </template>
      <j-button>top</j-button>
    </j-popover>
  </div>
  <div class="middle">
    <j-popover position="left">
      <template #content> 弹出内容 </template>
      <j-button>left</j-button>
    </j-popover>
    <j-popover position="right">
      <template #content> 弹出内容 </template>
      <j-button>right</j-button>
    </j-popover>
  </div>
  <div class="bottom">
    <j-popover position="bottom">
      <template #content> 弹出内容 </template>
      <j-button>bottom</j-button>
    </j-popover>
  </div>
</template>
```

## 不同触发方式

### 预览

<popover-demo-2 />

### 代码

```vue
<template>
  <div class="trigger">
    <j-popover position="left" :trigger="'click'">
      <template #content> 弹出内容 </template>
      <j-button>click</j-button>
    </j-popover>
    <j-popover position="right" :trigger="'hover'">
      <template #content> 弹出内容 </template>
      <j-button>hover</j-button>
    </j-popover>
  </div>
</template>
```

## 从浮层内关闭
### 预览

<popover-demo-3 />

### 代码
```vue
<template>
  <div class="trigger">
    <j-popover v-model:visible="visible">
      <template #content>
        弹出内容 <j-button level="main" @click="close">close</j-button>
      </template>
      <j-button>click</j-button>
    </j-popover>
  </div>
</template>
```