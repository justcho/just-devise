<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="导航">内容1</Tab>
      <Tab title="选项卡自适应">内容2</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("选项卡自适应");
    return {
      x,
    };
  },
};
</script>
