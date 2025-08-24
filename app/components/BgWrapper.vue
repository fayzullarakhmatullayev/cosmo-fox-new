<template>
  <div class="bg-wrapper">
    <NuxtImg alt="bg" :src="imageSrc" format="webp" quality="90" class="bg-img" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const images = ["/images/home-bg.jpg", "/images/all-bg.jpg"];

const isIncludes = (pageName: string) => {
  return String(route.meta.page)?.includes(pageName);
};

const imageSrc = computed(() => (isIncludes("home") ? images[0] : images[1]));

onMounted(() => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
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
</style>
