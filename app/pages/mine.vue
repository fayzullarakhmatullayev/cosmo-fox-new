<template>
  <h2>Get it</h2>
  <teleport to="body">
    <bg-wrapper />
  </teleport>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.mine"),
  meta: [{ name: "description", content: "Mine page" }]
});

definePageMeta({ page: "mine" });
</script>
