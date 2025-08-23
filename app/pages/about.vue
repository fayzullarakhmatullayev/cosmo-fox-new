<template>
  <div>
    <h2>About</h2>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.about"),
  meta: [{ name: "description", content: "About page" }]
});
</script>
