<template>
  <div class="layout">
    <div class="hero">
      <app-header />
      <pages-home />
    </div>
    <main>
      <pages-about />
      <pages-mine />
      <pages-token />
      <pages-roadmap />
      <pages-partners />
    </main>
    <app-footer />
    <bg-wrapper />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
  overflow-x: hidden;
  main {
    flex: 1;
  }
}
</style>
