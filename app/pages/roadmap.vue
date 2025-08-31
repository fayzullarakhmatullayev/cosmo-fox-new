<template>
  <section class="roadmap">
    <div class="title">{{ t("roadmap.title") }}</div>
    <div class="roadmap-wrapper">
      <div
        v-for="(item, i) in roadmap"
        :key="i"
        :class="['roadmap-item', i % 2 === 0 ? 'top' : 'bottom', `planet-${i + 1}`]"
      >
        <div class="planet-wrapper">
          <div class="planet-card">
            <h3>{{ item.date }}</h3>
            <p>{{ item.text }}</p>

            <nuxt-img
              src="/images/roadmap/roadmap-slot.png"
              alt="line"
              quality="80"
              format="webp"
              class="roadmap-slot"
            />
          </div>
          <div class="planet-image">
            <nuxt-img :src="item.planet" alt="planet" quality="80" format="webp" class="planet"></nuxt-img>
          </div>

          <div v-if="item.line" class="planet-line">
            <nuxt-img :src="item.line" quality="80" format="webp" />

            <div v-if="i === 1" class="ship">
              <nuxt-img src="/images/roadmap/ship.png" alt="ship" quality="80" format="webp" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="roadmap-mobile">
      <div
        v-for="(item, i) in processedRoadmap"
        :key="i"
        :class="['roadmap-item-mobile', 'roadmap-item', `planet-${i + 1}`, `${isPairEven(i) ? 'even' : 'odd'}`]"
      >
        <div class="planet-wrapper">
          <div class="planet-card">
            <h3>{{ item.date }}</h3>
            <p>{{ item.text }}</p>

            <nuxt-img
              src="/images/roadmap/roadmap-slot-mobile.png"
              alt="line"
              quality="80"
              format="webp"
              class="roadmap-slot"
            />
          </div>
          <div class="planet-image">
            <nuxt-img :src="item.planet" alt="planet" quality="80" format="webp" class="planet"></nuxt-img>
          </div>

          <div v-if="item.line" :class="['planet-line', `planet-line-${i + 1}`]">
            <nuxt-img :src="item.mobileLine" quality="80" format="webp" />

            <div v-if="i === 1" class="ship">
              <nuxt-img src="/images/roadmap/ship.png" alt="ship" quality="80" format="webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const roadmap = computed(() => [
  {
    date: "May 2025",
    text: "MVP Build & Company Setup",
    planet: "/images/roadmap/planet-1.png",
    line: "/images/roadmap/line-1.png",
    mobileLine: "/images/roadmap/line-mobile-1.png"
  },
  {
    date: "Summer 2025",
    text: "Community &\n Early Access",
    planet: "/images/roadmap/planet-2.png",
    line: "/images/roadmap/line-2.png",
    mobileLine: "/images/roadmap/line-mobile-2.png"
  },
  {
    date: "Sep 2025",
    text: "Phase 1 Launch",
    planet: "/images/roadmap/planet-3.png",
    line: "/images/roadmap/line-3.png",
    mobileLine: "/images/roadmap/line-mobile-3.png"
  },
  {
    date: "Fall 2025",
    text: "Drill Race\n Evolution",
    planet: "/images/roadmap/planet-4.png",
    line: "/images/roadmap/line-4.png",
    mobileLine: "/images/roadmap/line-mobile-4.png"
  },
  {
    date: "Q4 2025",
    text: "Token Presale",
    planet: "/images/roadmap/planet-5.png",
    line: "/images/roadmap/line-5.png",
    mobileLine: "/images/roadmap/line-mobile-5.png"
  },
  {
    date: "Feb 2026",
    text: "Token Launch &\n Listing",
    planet: "/images/roadmap/planet-6.png",
    line: "/images/roadmap/line-6.png",
    mobileLine: "/images/roadmap/line-mobile-6.png"
  },
  {
    date: "Feb 2026",
    text: "Airdrop\n Distribution",
    planet: "/images/roadmap/planet-7.png",
    line: "/images/roadmap/line-7.png",
    mobileLine: "/images/roadmap/line-mobile-7.png"
  },
  {
    date: "Q1 2026",
    text: "Phase 2 Game\n Launch",
    planet: "/images/roadmap/planet-8.png",
    line: "/images/roadmap/line-8.png",
    mobileLine: "/images/roadmap/line-mobile-8.png"
  },
  {
    date: "2026+",
    text: "Ecosystem Growth\n & Governance",
    planet: "/images/roadmap/planet-9.png",
    line: null,
    mobileLine: null
  }
]);

const processedRoadmap = computed(() => {
  const result = [...roadmap.value];

  for (let i = 0; i < result.length; i += 2) {
    if (i + 1 < result.length && !isPairEven(i)) {
      // @ts-expect-error `isPairEven` is a valid function
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }

  return result;
});

function isPairEven(num: number): boolean {
  return Math.floor(num / 2) % 2 === 0;
}

useHead({
  title: t("nav.roadmap"),
  meta: [{ name: "description", content: "Roadmap page" }]
});

definePageMeta({ page: "roadmap" });
</script>
