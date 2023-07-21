<template>
  <div class="justd-input" :class="{ error }" v-if="type !== 'textarea'">
    <input
      v-model="inputValue"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />
    <template v-if="error">
      <j-icon name="fail" color="red"></j-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
  <div class="justd-input" v-else>
    <textarea
      ref="textareaRef"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="adjustHeight"
      :rows="minRows ?? 1"
    ></textarea>
  </div>
</template>
<script lang="ts" setup>
import JIcon from "./icons/Icon.vue";
import { onMounted, ref, watch } from "vue";
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

const { minRows, maxRows } = autoSize;

const textareaRef = ref<HTMLTextAreaElement>(null);

onMounted(() => {
  autoSize && type === "textarea" && adjustHeight();
});
watch(
  () => inputValue.value,
  (newValue) => {
    emit("update:value", newValue!);
  }
);
const lineHeight = 20; // 每行的高度
const adjustHeight = () => {
  const textarea = textareaRef.value;
  textarea.style.height = "auto";
  if (maxRows) textarea.style.maxHeight = maxRows * lineHeight + "px";
  const height = textarea.scrollHeight;
  textarea.style.height = `${height}px`;
  const rowsNum = Math.ceil(height / lineHeight);
  textarea.style.overflowY = rowsNum > maxRows ? "scroll" : "hidden";
};
</script>
<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #10b981;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(16, 185, 129, 0.2);
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
  > textarea {
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 4px 5px;
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
  }

  &.error {
    > input {
      border-color: $red;

      &:hover {
        border-color: none;
      }

      &:focus {
        box-shadow: 0 0 0 0.5px $red;
        outline: none;
        border-color: none;
      }
    }
  }

  .justd-icon {
    width: 2em;
    height: 2em;
  }

  .errorMessage {
    color: $red;
    font-size: 1.5em;
  }
}
</style>
