<template>
  <section id="partners" class="partners">
    <div class="title">{{ $t("parthers_title") }}</div>

    <div class="partners__wrapper">
      <a v-for="card in partners" :key="card.image" :href="card.link" target="_blank" class="partners__card">
        <nuxt-img
          :src="card.image"
          alt="partner"
          quality="60"
          format="webp"
          class="partners__card--image"
          :style="{ height: `${card.height}px` }"
        />
        <nuxt-img
          src="/images/partners/partner-slot.png"
          alt="partners-slot"
          quality="60"
          format="webp"
          class="partners__card--slot"
        />
      </a>
    </div>
    <div class="partners__links">
      <a :href="config.public.cookiePolicyUrl" target="_blank"><span>Cookie policy</span> <icon-link-white /></a>
      <a :href="config.public.privacyPolicyUrl" target="_blank"><span>privacy policy</span> <icon-link-white /></a>
      <a :href="config.public.tokenomicUrl" target="_blank"><span>tokenomic</span> <icon-link-white /></a>
      <a :href="config.public.blogUrl" target="_blank"><span>blog</span> <icon-link-white /></a>
    </div>

    <div class="partners__social footer__social">
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
  </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const partners = computed(() => [
  { image: "/images/partners/partner-1.png", height: 47, link: config.public.mediciUrl },
  { image: "/images/partners/partner-2.png", height: 43, link: config.public.icodaUrl },
  { image: "/images/partners/partner-3.png", height: 56, link: config.public.cicadaUrl },
  { image: "/images/partners/partner-4.png", height: 54, link: config.public.tonUrl }
]);

const socials = reactive([
  { icon: "telegram", name: "chat", width: 42, link: config.public.tgChatUrl },
  { icon: "telegram", name: "news", width: 42, link: config.public.tgNewsUrl },
  { icon: "discord", name: "discord", width: 48, link: config.public.discordUrl },
  { icon: "twitter", name: "x.com", width: 35, link: config.public.twitterUrl }
]);
</script>
