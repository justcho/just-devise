<template>
  <Button theme="button" @click="toggle">开启对话框</Button>
  <Dialog
    v-model:visible="open"
    :closeOnclickOverlay="true"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 遮罩关闭 </template>
    <template v-slot:content>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

const open = ref(false);
const toggle = () => {
  open.value = !open.value;
};
const f1 = () => {
  open.value = !open.value;
};
const f2 = () => {
  open.value = !open.value;
};
</script>
