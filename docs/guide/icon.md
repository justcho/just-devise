
<script setup>
  import IconDemo from '../components/icon-demo.vue'
</script>

# Icon &nbsp;图标

> 语义化的矢量图形

## 展示

<icon-demo />

## 代码

```vue
<template>
  <div class="icon-demo">
    <div class="icon-demo-item" v-for="i in list">
      <j-icon :name="i.name" :color="i.color"></j-icon>
      <p>{{ i.name }}</p>
    </div>
  </div>
</template>
<script setup>
import JIcon from "../lib/icons/Icon.vue";
import { ref } from "vue";
const list = ref([
  { name: "star", color: "red" },
  { name: "search", color: "blue" },
  { name: "message", color: "green" },
  { name: "thumbs", color: "pink" },
  { name: "cue", color: "purple" },
  { name: "navigation", color: "sliver" },
  { name: "settings", color: "black" },
  { name: "fail", color: "skyblue" },
  { name: "time", color: "#00FFFF" },
  { name: "copy", color: "#EEE685" },
  { name: "modify", color: "yellow" },
  { name: "enter", color: "#FFE7BA" },
]);
</script>
```
