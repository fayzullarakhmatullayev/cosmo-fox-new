<template>
  <div class="bg-wrapper">
    <div class="bg-desktop">
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
    <div class="bg-mobile">
      <nuxt-img
        v-show="isIncludes('home')"
        alt="bg"
        src="/images/home-bg-mobile.jpg"
        format="webp"
        quality="80"
        class="bg-img"
      />
      <nuxt-img
        v-show="!isIncludes('home')"
        alt="bg"
        src="/images/all-bg-mobile.jpg"
        format="webp"
        quality="80"
        class="bg-img bg-all"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isIncludes = (pageName: string) => {
  return String(route.meta.page)?.includes(pageName);
};
</script>
