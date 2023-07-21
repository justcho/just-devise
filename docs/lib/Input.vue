<template>
  <div class="justd-input" :class="{ error }" v-if="type !== 'textarea'">
    <input
      v-model="inputValue"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />
    <!-- <template v-if="error">
            <icon name="fail" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template> -->
  </div>
  <div class="justd-input" v-else>
    <textarea
      ref="textareaRef"
      :placeholder="placeholder"
      v-model="inputValue"
    ></textarea>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, nextTick, watch } from "vue";

const props = defineProps<{
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  autoSize?: boolean | string;
}>();
const { type, autoSize, value } = props;

const emit = defineEmits<{
  (e: "update:value", value: string): void;
}>();

const inputValue = ref(value);

const { minRow, maxRow } = autoSize;

const textareaRef = ref<HTMLTextAreaElement>(null);

onMounted(() => {
  // nextTick(adjustSize);
});
watch(
  () => inputValue.value,
  (newValue) => {
    emit("update:value", newValue!);
  }
);

const adjustSize = () => {
  let textarea = textareaRef.value;
  textarea.style.height = "auto";
  if (maxRow) {
    textarea.style.maxHeight = maxRow * 24 + "px";
  }
  const height = textarea.scrollHeight;
  if (height) {
    // 改变textarea高度达到自适应
    textarea.style.height = height + "px";
    const rowsNum = Math.round(height / 24);
    textarea.style.overflowY = rowsNum > maxRow ? "scroll" : "hidden";
  }
};
</script>
<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #10b981;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(16, 185, 129, 0.5);
$red: #f1453d;

.justd-input {
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
      box-shadow: 0 0 0 0 $box-shadow-color;
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
  > textarea {
    // height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 4px 5px;
    font-size: inherit;
    width: 100%;
    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: 0 0 0 0 $box-shadow-color;
      outline: none;
      border-color: $border-color-hover;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }
}
</style>
