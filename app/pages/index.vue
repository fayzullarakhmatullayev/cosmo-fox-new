<template>
  <div class="home">
    <div class="video">
      <video src="/videos/title.mp4" loop autoplay muted></video>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("nav.home"),
  meta: [{ name: "description", content: "Main page" }]
});
</script>
