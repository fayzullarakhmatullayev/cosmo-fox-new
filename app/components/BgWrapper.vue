<template>
  <div class="bg-wrapper">
    <img :src="src" :alt="alt" class="bg-img" />
  </div>
</template>

<script lang="ts" setup>
const { src = "/images/all-bg.jpg", alt = "background" } = defineProps<{ src?: string; alt?: string }>();
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
