<template>
  <div class="justd-tabs">
    <div class="justd-tabs-nav">
      <div
        class="justd-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) navItems = el;
          }
        "
        :key="index"
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="justd-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="justd-tabs-content">
      <component
        class="justd-tabs-content-item"
        v-for="c in defaults"
        :is="c"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { onMounted, ref } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    onMounted(() => {
      // console.log(navItems.value);
      const result = navItems.value;
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
      navItems,
      indicator,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
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
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
