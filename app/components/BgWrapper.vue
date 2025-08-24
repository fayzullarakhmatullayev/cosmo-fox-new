<template>
  <div class="bg-wrapper">
    <NuxtImg :src="src" :alt="alt" format="webp" quality="90" />
  </div>
</template>

<script lang="ts" setup>
const { src = "/images/all-bg.jpg", alt = "background" } = defineProps<{ src?: string; alt?: string }>();
</script>

<style>
.bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;

  img {
    object-fit: cover;
  }

  &__content {
    z-index: 10;
    position: relative;
  }
}
</style>
