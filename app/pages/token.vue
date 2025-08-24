<template>
  <h2>Token</h2>
  <teleport to="body">
    <bg-wrapper />
  </teleport>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.token"),
  meta: [{ name: "description", content: "Token page" }]
});

definePageMeta({ page: "token" });
</script>
