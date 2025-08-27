<template>
  <div class="token-charts">
    <h2 class="title">распределение токенов</h2>
    <div class="charts__wrapper">
      <div class="chart-container"></div>
      <div class="table-container">
        <div class="table-inner">
          <table class="table">
            <thead>
              <tr>
                <th>category, %</th>
                <th>tokens (M)</th>
                <th>vesting</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>
                  <span
                    class="table-color"
                    :style="{ background: `linear-gradient(to right, ${item.colors[0]}, ${item.colors[1]})` }"
                  />
                  <p>{{ item.category }}</p>
                </td>
                <td>
                  <p>{{ item.tokens }}</p>
                </td>
                <td>
                  <p>{{ item.vesting }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nuxt-img
          src="/images/token-border-left.png"
          alt="token-border"
          class="token-border token-border-left"
          quality="40"
        />
        <nuxt-img
          src="/images/token-border-right.png"
          alt="token-border"
          class="token-border token-border-right"
          quality="40"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = computed(() => [
  {
    id: 1,
    colors: ["#468DFF", "#005373"],
    category: "15% Team",
    tokens: 150,
    vesting: "12-month cliff - 24-month linear vesting"
  },
  {
    id: 2,
    colors: ["#60FFA2", "#02CD56"],
    category: "10% Private sale",
    tokens: 100,
    vesting: "1-month cliff - 12-month linear vesting"
  },
  {
    id: 3,
    colors: ["#FF7373", "#D72626"],
    category: "15% Pre-sale",
    tokens: 150,
    vesting: "No cliff - 9-month linear vesting"
  },
  {
    id: 4,
    colors: ["#E3FF66", "#EF7B00"],
    category: "20% Marketing & Community",
    tokens: 200,
    vesting: "10% at tge - 12-month linear vesting"
  },
  {
    id: 5,
    colors: ["#BB68FF", "#590B99"],
    category: "10% Liquidity & Listing",
    tokens: 100,
    vesting: "100% unlocked at TGE"
  },
  {
    id: 6,
    colors: ["#76FAFF", "#009196"],
    category: "10% Treasury",
    tokens: 100,
    vesting: "18-month linear vesting"
  },
  {
    id: 7,
    colors: ["#7573E0", "#3E3C9E"],
    category: "15% Play-to-earn",
    tokens: 100,
    vesting: "12-month linear vesting"
  },
  {
    id: 8,
    colors: ["#FEB8DF", "#EF03A4"],
    category: "5% Advisors",
    tokens: 50,
    vesting: "6-month cliff - 18-month linear vesting"
  }
]);
</script>
