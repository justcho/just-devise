<template>
  <h3>示例1</h3>
  <div class="demo-p">
    <Button theme="button">normal</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h3>示例2</h3>
  <div class="demo-p">
    <Button>normal</Button>
    <Button size="big">big</Button>
    <Button size="small">small</Button>
  </div>
  <h3>示例3</h3>
  <div class="demo-p">
    <Button>normal</Button>
    <Button level="main">main</Button>
    <Button level="warning">warning</Button>
    <Button level="danger">danger</Button>
  </div>
  <h3>示例4</h3>
  <div class="demo-p">
    <Button>normal</Button>
    <Button disabled>disabled</Button>
  </div>
  <h3>示例5</h3>
  <div class="demo-p">
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
  // setup() {
  //   const onClick = () => {
  //     console.log("hi");
  //   };
  //   return { onClick };
  // },
};
</script>
<style lang="scss" scoped>
.demo-p {
  padding-top: 25px;
}
</style>
