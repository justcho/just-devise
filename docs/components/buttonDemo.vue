<template>
  <h3>示例1</h3>
  <div>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h3>示例2</h3>
  <div>
    <Button>normal</Button>
    <Button size="big">big</Button>
    <Button size="small">small</Button>
  </div>
  <h3>示例3</h3>
  <div>
    <Button>normal</Button>
    <Button level="main">main</Button>
    <Button level="warning">warning</Button>
    <Button level="danger">danger</Button>
  </div>
  <h3>示例4</h3>
  <div>
    <Button>normal</Button>
    <Button disabled>disabled</Button>
  </div>
  <h3>示例5</h3>
  <div>
    <Button loading>loading</Button>
    <Button>done</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
