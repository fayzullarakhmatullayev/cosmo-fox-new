<template>
  <h2>Home</h2>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.home"),
  meta: [{ name: "description", content: "Main page" }]
});
</script>

<style lang="scss">
@import "~/assets/scss/home.scss";
</style>
