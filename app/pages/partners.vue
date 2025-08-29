<template>
  <section class="partners">
    <div class="title">{{ $t("parthers_title") }}</div>

    <div class="partners__wrapper">
      <div v-for="card in partners" :key="card.image" class="partners__card">
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
      </div>
    </div>
    <div class="partners__links">
      <a href="#"><span>Cookie policy</span> <icon-link-white /></a>
      <a href="#"><span>privacy policy</span> <icon-link-white /></a>
      <a href="#"><span>tokenomic</span> <icon-link-white /></a>
      <a href="#"><span>blog</span> <icon-link-white /></a>
    </div>

    <div class="partners__social footer__social">
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
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const partners = computed(() => [
  { image: "/images/partners/partner-1.png", height: 47 },
  { image: "/images/partners/partner-2.png", height: 43 },
  { image: "/images/partners/partner-3.png", height: 56 },
  { image: "/images/partners/partner-4.png", height: 54 }
]);

const socials = reactive([
  { icon: "telegram", name: "chat", width: 42, link: "#" },
  { icon: "telegram", name: "news", width: 42, link: "#" },
  { icon: "discord", name: "discord", width: 48, link: "#" },
  { icon: "twitter", name: "x.com", width: 35, link: "#" }
]);

useHead({
  title: t("nav.partners"),
  meta: [{ name: "description", content: "Partners page" }]
});

definePageMeta({ page: "partners" });
</script>
