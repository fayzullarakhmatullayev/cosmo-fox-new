<template>
  <div>
    <h2>About</h2>
  </div>
  <teleport to="body">
    <bg-wrapper />
  </teleport>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("nav.about"),
  meta: [{ name: "description", content: "About page" }]
});

definePageMeta({ page: "about" });
</script>
