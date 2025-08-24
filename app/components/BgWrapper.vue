<template>
  <div class="bg-wrapper">
    <NuxtImg
      :key="src"
      :src="src"
      :alt="alt"
      format="webp"
      quality="90"
      class="bg-img"
      :placeholder="img(`${src}`, { h: 10, f: 'png', blur: 2, q: 50 })"
    />
  </div>
</template>

<script lang="ts" setup>
const { src = "/images/all-bg.jpg", alt = "background" } = defineProps<{ src?: string; alt?: string }>();
const img = useImage();
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
