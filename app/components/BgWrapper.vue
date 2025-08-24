<template>
  <div class="bg-wrapper">
    <NuxtImg :key="imageSrc" alt="bg" :src="imageSrc" format="webp" quality="80" class="bg-img" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isIncludes = (pageName: string) => {
  return String(route.meta.page)?.includes(pageName);
};

const imageSrc = computed(() => (isIncludes("home") ? "/images/home-bg.jpg" : "/images/all-bg.jpg"));
</script>

<style>
.bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: -2;
}
.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
