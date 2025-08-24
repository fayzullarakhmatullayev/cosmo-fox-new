<template>
  <a v-bind="$attrs" :class="variant" :type="type"><slot /></a>
</template>

<script lang="ts" setup>
const { variant = "small", type = "button" } = defineProps<{
  variant?: "small" | "large";
  type?: "button" | "submit" | "reset";
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/mixins.scss";
a {
  clip-path: polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
  font-size: 25px;
  color: rgba(7, 30, 53, 1);
  padding: 13px 38px 14px;
  min-width: 182px;
  background: linear-gradient(135deg, #69fee6, #2be7df, #23c8e0);
  text-align: center;
  display: block;
  cursor: pointer;
  @include laptop {
    font-size: 20px;
    min-width: 160px;
  }

  &.large {
    padding: 24px 87px 26px 85px;
    font-size: 30px;

    @include laptop {
      padding: 20px 70px 22px 68px;
      font-size: 25px;
    }
  }
}
</style>
