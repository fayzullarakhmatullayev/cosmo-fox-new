<template>
  <div class="bg-wrapper">
    <nuxt-img
      v-show="isIncludes('home')"
      alt="bg"
      src="/images/home-bg.jpg"
      format="webp"
      quality="80"
      class="bg-img"
    />
    <nuxt-img
      v-show="!isIncludes('home')"
      alt="bg"
      src="/images/all-bg.jpg"
      format="webp"
      quality="80"
      class="bg-img bg-all"
    />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isIncludes = (pageName: string) => {
  return String(route.meta.page)?.includes(pageName);
};
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

.bg-all {
  position: fixed;
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
