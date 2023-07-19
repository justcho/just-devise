<template>
  <div class="icon-demo">
    <div class="icon-demo-item" v-for="i in list">
      <j-icon :name="i"></j-icon>
      <p>{{ i }}</p>
    </div>
  </div>
</template>
<script setup>
import JIcon from "../lib/icons/Icon.vue";
import { ref } from "vue";
const list = ref([
  "star",
  "search",
  "message",
  "thumbs",
  "cue",
  "navigation",
  "settings",
  "out",
  "fail",
  "time",
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
    .j-icon {
      width: 2em;
      height: 2em;
    }
  }
}
</style>
