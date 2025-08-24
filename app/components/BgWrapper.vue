<template>
  <div class="bg-wrapper">
    <Transition name="fade" mode="out-in">
      <NuxtImg :key="src" :src="src" :alt="alt" format="webp" quality="90" class="bg-img" />
    </Transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
