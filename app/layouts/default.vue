<template>
  <div class="layout">
    <app-header />
    <main>
      <div class="container"><nuxt-page /></div>
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const updateBodyClass = () => {
  document.body.className = "";
  console.log(route);
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

  main {
    flex: 1;
  }
}
</style>
