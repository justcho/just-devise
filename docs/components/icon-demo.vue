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
  { name: "enter", color: "	#FFE7BA" },
  { name: "top", color: "black" },
]);
</script>
<style lang="scss" scoped>
.icon-demo {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .icon-demo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20%;
    > p {
      font-size: 14px;
    }
    .justd-icon {
      width: 2em;
      height: 2em;
    }
  }
}
</style>
