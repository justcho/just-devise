<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="justd-dialog-overlay" @click="onClickOverlay"></div>
      <div class="justd-dialog-wrapper">
        <div class="justd-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="justd-dialog-close"></span>
          </header>
          <main><slot name="content" /></main>
          <footer>
            <Button @click="onClickOk">OK</Button>
            <Button @click="onClickCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts" setup>
import Button from "./Button.vue";
// props 泛型
const props = defineProps<{
  visible?: boolean;
  closeOnclickOverlay?: boolean;
  ok?: () => boolean;
  cancel?: () => void;
}>();
// emit泛型
const emit = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const close = () => {
  emit("update:visible", false);
};
const onClickOverlay = () => {
  if (props.closeOnclickOverlay) {
    close();
  }
};
const onClickOk = () => {
  if (props.ok?.() !== false) {
    close();
  }
};
const onClickCancel = () => {
  if (props.cancel?.()) {
    close();
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.justd-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 100;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
