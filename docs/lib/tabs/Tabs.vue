<template>
  <div class="justd-tabs">
    <div class="justd-tabs-nav" ref="container">
      <div
        class="justd-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :key="index"
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="justd-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="justd-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tab from "./Tab.vue";
import { computed, onMounted, ref, useSlots, watchEffect } from "vue";
const props = defineProps<{
  selected?: string;
}>();
const emit = defineEmits<{
  update: [selected: string];
}>();

const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(
    () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    },
    {
      flush: "post",
    }
  );
});
const slots = useSlots();
const defaults = slots.default?.();
defaults?.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error("Tabs子标签必须是Tab");
  }
});
const current = computed(() => {
  return defaults.find((tag) => tag.props?.title === props.selected);
});
const titles = defaults.map((tag) => {
  return tag.props?.title;
});

const select = (title: string) => {
  emit("update:selected", title);
};
</script>
<style lang="scss">
$blue: #10b981;
$color: #333;
$border-color: #d9d9d9;

.justd-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      // 滑动
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
