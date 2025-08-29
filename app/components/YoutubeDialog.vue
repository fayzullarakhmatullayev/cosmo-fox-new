<template>
  <div class="dialog">
    <div class="dialog__overlay" @click="emit('close')"></div>
    <div class="dialog__blog">
      <div class="dialog__close" @click="emit('close')">&times;</div>
      <iframe
        src="https://www.youtube.com/embed/NJpAejZ_f4o"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["close"]);
</script>
