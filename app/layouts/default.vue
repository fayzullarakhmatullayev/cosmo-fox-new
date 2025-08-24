<template>
  <div class="layout">
    <app-header />
    <main>
      <div class="container"><nuxt-page /></div>
    </main>
    <app-footer />
    <bg-wrapper :src="imageSrc" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const imageSrc = computed(() => {
  let imageSrc = "/images/all-bg.jpg";
  if (route.meta.page === "home") {
    imageSrc = "/images/home-bg.jpg";
  }
  return imageSrc;
});

const updateBodyClass = () => {
  document.body.className = "";
  if (route.meta.page) {
    document.body.classList.add(`page-${String(route.meta.page)}`);
  }
};

onBeforeMount(updateBodyClass);
watch(() => route.name, updateBodyClass);
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
  main {
    flex: 1;
    position: relative;
    z-index: 10;
  }
}
</style>
