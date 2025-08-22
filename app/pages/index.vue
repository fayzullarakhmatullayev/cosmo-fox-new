<template>
  <div>
    <h2>Main page {{ $t("test") }}</h2>
    <div class="wrapper">
      <icon-charts width="100" height="100" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
}
</style>
