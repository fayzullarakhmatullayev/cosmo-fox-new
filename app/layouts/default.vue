<template>
  <div class="app">
    <app-header />
    <main class="app__main"><nuxt-page /></main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  padding: 24px;
  &__main {
    flex: 1;
  }
}
</style>
