<template>
  <div>
    <j-tabs v-model:selected="select">
      <j-tab title="导航">导航</j-tab>
      <j-tab title="选项卡自适应">选项卡自适应</j-tab>
    </j-tabs>
  </div>
</template>
<script lang="ts" setup>
import JTabs from "../lib/tabs/Tabs.vue";
import JTab from "../lib/tabs/Tab.vue";
import { ref } from "vue";
const select = ref("选项卡自适应");
</script>
