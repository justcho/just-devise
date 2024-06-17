<template>
  <!--        文本内容-->
  <div v-if="!isEdit" class="contentWrapper">
    <span id="content">{{ content }}</span>
    <!--    编辑图标-->
    <span
      v-if="editable"
      class="svgContainer editContainer"
      @click="changeEditStatus"
    >
      <j-icon name="modify" color="#000"></j-icon>
      <!--      编辑提示-->
      <span class="tip">
        <span>编辑</span>
        <span class="triangle"></span>
      </span>
    </span>
    <!--    复制图标-->
    <span
      v-if="copyable"
      class="svgContainer copyContainer"
      @click="copyContent"
    >
      <j-icon name="copy" color="#3c3c43"></j-icon>
      <!--      编辑提示-->
      <span class="tip">
        <span>{{ copyTip }}</span>
        <span class="triangle"></span>
      </span>
    </span>
  </div>
  <!--  实际输入框-->
  <div v-show="isEdit" class="input-wrapper">
    <input
      ref="inputRef"
      :value="content"
      @blur="emitContent"
      @keyup.enter="emitContent"
    />
    <!-- <span class="svgContainer" @click="emitContent">
      <j-icon name="enter" color="#3c3c43"></j-icon>
    </span> -->
  </div>
</template>
<script lang="ts" setup>
import { watch, ref, onMounted } from "vue";
import JIcon from "../icons/Icon.vue";
import JInput from "../Input.vue";
const props = defineProps<{
  editable: boolean;
  copyable: boolean;
  content: string;
}>();
const isEdit = ref(false);
const inputRef = ref(null);
const copyRef = ref("#icon-copy");
const copyTip = ref("复制");
const emit = defineEmits<{
  update: [content: string];
}>();
const emitContent = () => {
  const data = inputRef.value.value;
  emit("update:content", data);
  isEdit.value = false;
};
const changeEditStatus = () => {
  isEdit.value = !isEdit.value;
};
const copyContent = () => {
  if (copyRef.value === "#icon-success") {
    return;
  }
  copyRef.value = "#icon-success";
  copyTip.value = "成功";
  setTimeout(() => {
    copyRef.value = "#icon-copy";
    copyTip.value = "复制";
  }, 2000);
  const input = document.createElement("input");
  input.setAttribute("readonly", "readonly");
  input.setAttribute("value", props.content);
  document.body.appendChild(input);
  input.setSelectionRange(0, 9999);
  if (document.execCommand("copy")) {
    input.select(); // 选中输入框，才能复制
    document.execCommand("copy");
  }
  document.body.removeChild(input);
};
</script>
<style lang="scss">
$border-color: #999;
$border-color-hover: #10b981;
$box-shadow-color: rgba(16, 185, 129, 0.2);
$font-size: 12px;
.contentWrapper {
  width: 100%;
  > .svgContainer {
    cursor: pointer;
    margin-left: 5px;
    color: red;
  }

  > .editContainer,
  .copyContainer {
    position: relative;
    display: inline-block;
    &:hover .tip {
      visibility: visible;
    }
  }
  .tip {
    display: inline-block;
    position: absolute;
    height: 35px;
    width: auto;
    max-width: 100px;
    white-space: nowrap;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #404040;
    text-align: center;
    z-index: 1;
    top: -48px;
    color: white;
    font-size: 14px;
    line-height: 35px;
    left: -20px;
    visibility: hidden;

    > .triangle {
      position: absolute;
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 1px solid;
      transform: rotate(-45deg);
      background-color: #404040;
      border-color: transparent transparent white white;
      bottom: -4px;
      left: 22px;
    }
  }
}
.input-wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    width: 100%;
    > :not(:last-child) {
      margin-right: 0.5em;
    }
    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      width: 100%;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: 0 0 0 1.5px $box-shadow-color;
        outline: none;
        border-color: $border-color-hover;
      }

      &[disabled],
      &[readonly] {
        cursor: not-allowed;
      }
      &[disabled] {
        border-color: #bbb;
        color: #bbb;
        background-color: #f5f7fa;
      }
    }
  }
</style>
