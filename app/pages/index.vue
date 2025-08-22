<script lang="ts" setup>
const img = useImage();
</script>

<template>
  <div>
    <h2>Main page {{ $t('test') }}</h2>
    <div class="wrapper">
      <icon-charts width="100" height="100" />

      <div class="image">
        <nuxt-img
          src="/images/building.jpg"
          :placeholder="img(`/images/building.jpg`, { h: 10, f: 'png', blur: 2, q: 50 })"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;

  .image {
    margin-left: 16px;
    border-radius: 10px;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }
}
</style>
