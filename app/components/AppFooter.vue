<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__social">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.link"
            class="footer__social--item"
            :style="{ width: `${social.width}px` }"
          >
            <component :is="`icon-${social.icon}`" :style="{ width: `${social.width}px` }" />
            <span>{{ social.name }}</span>
          </a>
        </div>
        <div class="footer__right">
          <a href="#" class="footer__right--item">privacy policy</a>
          <a href="#" class="footer__right--item">cookie policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const socials = reactive([
  { icon: "telegram", name: "chat", width: 42, link: "#" },
  { icon: "telegram", name: "news", width: 42, link: "#" },
  { icon: "discord", name: "discord", width: 48, link: "#" },
  { icon: "twitter", name: "x.com", width: 35, link: "#" }
]);
</script>
