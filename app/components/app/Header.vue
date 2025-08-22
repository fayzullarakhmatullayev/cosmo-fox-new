<script lang="ts" setup></script>

<template>
  <header>
    <h2>Header</h2>
    <nav>
      <nuxt-link-locale active-class="active" to="/">Home</nuxt-link-locale>
      <nuxt-link-locale active-class="active" to="/about">About</nuxt-link-locale>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      text-decoration: none;
      color: inherit;

      &.active {
        text-decoration: underline;
      }
    }
  }
}
</style>
