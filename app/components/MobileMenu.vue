<template>
  <div class="mobile__menu">
    <nav class="mobile__menu--links">
      <a v-for="nav in navs" :key="nav.to" active-class="active" :href="nav.to" @click="handleLinkClick">
        {{ t(nav.label) }}
      </a>
      <a :href="config.public.whitePaperUrl" target="_blank">{{ t("nav.white-paper") }}</a>
      <a :href="config.public.blogUrl" target="_blank">{{ t("nav.blog") }}</a>
    </nav>

    <div class="mobile__menu--social">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.link"
        class="footer__social--item"
        target="_blank"
        :style="{ width: `${social.width}px` }"
      >
        <component :is="`icon-${social.icon}`" :style="{ width: `${social.width}px` }" />
        <span>{{ social.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
defineProps<{ navs: { to: string; label: string }[] }>();
const emit = defineEmits(["close"]);

const config = useRuntimeConfig();

const socials = reactive([
  { icon: "telegram", name: "chat", width: 42, link: config.public.tgChatUrl },
  { icon: "telegram", name: "news", width: 42, link: config.public.tgNewsUrl },
  { icon: "discord", name: "discord", width: 48, link: config.public.discordUrl },
  { icon: "twitter", name: "x.com", width: 35, link: config.public.twitterUrl }
]);

const handleLinkClick = () => {
  setTimeout(() => emit("close"), 100);
};
</script>
