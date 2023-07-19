<template>
  <div class="justd-paragraph">
    <p><slot></slot></p>
  </div>
</template>
<script setup></script>
<style lang="scss">
.justd-paragraph {
  > p {
    font-size: 14px;
  }
}
</style>
