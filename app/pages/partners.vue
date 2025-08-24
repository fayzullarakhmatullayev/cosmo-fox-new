<template>
  <h2>Partners</h2>
  <teleport to="body">
    <bg-wrapper />
  </teleport>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.partners"),
  meta: [{ name: "description", content: "Partners page" }]
});

definePageMeta({ page: "partners" });
</script>
