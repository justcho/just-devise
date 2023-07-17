<template>
  <div>
    <Tabs v-model:selected="select">
      <Tab title="导航">导航</Tab>
      <Tab title="选项卡自适应">选项卡自适应</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
import Tabs from "../lib/tabs/Tabs.vue";
import Tab from "../lib/tabs/Tab.vue";
import { ref } from "vue";
const select = ref("选项卡自适应");
</script>
