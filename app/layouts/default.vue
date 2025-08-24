<template>
  <div class="layout">
    <app-header />
    <main>
      <div class="container"><nuxt-page /></div>
    </main>
    <app-footer />
  </div>
</template>

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
