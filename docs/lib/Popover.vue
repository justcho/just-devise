<template>
  <div class="justd-popover">
    <div
      ref="contentRef"
      class="justd-popover-content"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span class="justd-popover-trigger" ref="triggerRef">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  position: "top" | "left" | "right" | "bottom";
  trigger: "click" | "hover";
  visible: boolean;
}>();
const emits = defineEmits<{
  update: [visible: boolean];
}>();
const visible = ref(false);
const triggerRef = ref<HTMLElement>(null);
watch(
  () => props.visible,
  (val) => {
    visible.value = val;
  }
);
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
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;

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
