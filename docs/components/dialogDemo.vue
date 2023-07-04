<template>
  <Button @click="toggle">开启对话框</Button>
  <Dialog
    v-model:visible="open"
    :closeOnclickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 小题目 </template>
    <template v-slot:content>
      <div>1111</div>
      <div>2222</div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import { openDialog } from "../lib/openDialog";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const open = ref(false);
    const toggle = () => {
      open.value = !open.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { open, toggle, f1, f2 };
  },
};
</script>
