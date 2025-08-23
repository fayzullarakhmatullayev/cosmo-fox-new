<template>
  <div class="app">
    <app-header />
    <main class="app__main"><nuxt-page /></main>
    <app-footer />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  &__main {
    flex: 1;
  }
}
</style>
