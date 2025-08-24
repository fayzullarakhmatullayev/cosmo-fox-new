<template>
  <div class="not-found">
    <h1>404</h1>

    <p>{{ t("not-found") }}</p>
    <ui-button @click="navigateTo(`/${locale}`)">{{ t("back-to-home") }}</ui-button>
  </div>
</template>
<script lang="ts" setup>
const { locale, t } = useI18n();
</script>
<style scoped>
.not-found {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  overflow: hidden;
}

.not-found h1 {
  font-size: 5rem;
  color: #ff4c4c;
}

.not-found p {
  font-size: 2rem;
}
</style>
