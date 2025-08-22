<template>
  <div class="not-found">
    <h1>Oops! Page not found</h1>

    <p>{{ error?.message }}</p>
    <button class="btn" @click="navigateTo(`/${locale}`)">Back to home</button>
  </div>
</template>
<script lang="ts" setup>
const error = useError();

const { locale } = useI18n();
</script>
<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.not-found h1 {
  font-size: 3rem;
  color: #ff4c4c;
}

.not-found p {
  font-size: 1.5rem;
}

.btn {
  background-color: blueviolet;
  color: #fff;
  width: fit-content;
  margin: 0 auto;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
