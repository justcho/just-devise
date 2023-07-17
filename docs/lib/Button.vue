<template>
  <button class="justd-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="justd-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
// props的泛型写法
const props = defineProps<{
  theme?: "button" | "text" | "link";
  size?: "normal" | "big" | "small";
  level?: "normal" | "main" | "danger";
  disabled?: boolean;
  loading?: boolean;
}>();

const { theme, size, level } = props;
const classes = computed(() => {
  return {
    [`justd-theme-${theme}`]: theme,
    [`justd-size-${size}`]: size,
    [`justd-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #10b981;
$radius: 4px;
$red: red;
$orange: orange;
$grey: grey;

.justd-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px !important;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $green;
    border-color: $green;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.justd-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;

    &:hover,
    &:focus {
      color: lighten($green, 10%);
    }
  }

  &.justd-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.justd-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.justd-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.justd-theme-button {
    &.justd-level-main {
      background: $green;
      color: white;
      border-color: $green;

      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }

    &.justd-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.justd-level-warning {
      background: $orange;
      border-color: $orange;
      color: white;

      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
  }

  &.justd-theme-link {
    &.justd-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.justd-theme-text {
    &.justd-level-main {
      color: $green;

      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }

    &.justd-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.justd-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.justd-theme-link,
  &.justd-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .justd-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $green $green $green transparent;
    border-style: solid;
    border-width: 2px;
    animation: justd-spin 1s infinite linear;
  }
}

@keyframes justd-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
