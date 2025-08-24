<template>
  <h2>Roadmap</h2>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.roadmap"),
  meta: [{ name: "description", content: "Roadmap page" }]
});

definePageMeta({ page: "roadmap" });
</script>
