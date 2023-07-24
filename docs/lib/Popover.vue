<template>
  <div class="justd-popover">
    <div class="justd-popover-content">
      <slot></slot>
    </div>
    <span class="justd-popover-trigger" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  position: "top" | "left" | "right" | "bottom";
  trigger: "click" | "hover";
  visible: boolean;
}>();
const emits = defineEmits<{
  update: [visible: boolean];
}>();
</script>
<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.justd-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .justd-popover-content {
    position: absolute;
    left: 0;
    z-index: 999;
    border-radius: $border-radius;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
      0 9px 28px 8px #0000000d;
    padding: 8px 10px;
    color: #fff;
    background-color: #000000d9;
    max-width: 20em;
    word-break: break-all;
    font-size: 14px;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border: 6px solid transparent;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before,
      &::after {
        top: 100%;
        left: 10%;
        transform: translateX(-50%);
        border-top-color: #fff;
      }

      &::after {
        top: calc(100% - 1px);
        border-top-color: #000000d9;
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before,
      &::after {
        transform: translateY(-100%);
        top: 0;
        border-bottom-color: lightgray;
      }

      &::after {
        transform: translateY(-98%);
        border-bottom-color: #000000d9;
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before,
      &::after {
        top: 50%;
        left: 0;
        border-right-color: lightgray;
        transform: translate(-100%, -50%);
      }

      &::after {
        border-right-color: #000000d9;
      }
    }

    &.position-left {
      margin-left: -10px;
      transform: translateX(-100%);

      &::before,
      &::after {
        top: 50%;
        right: 0;
        border-left-color: lightgray;
        transform: translate(100%, -50%);
      }

      &::after {
        border-left-color: #000000d9;
      }
    }
  }
  .justd-popover-trigger {
    display: inline-block;
  }
}
</style>
