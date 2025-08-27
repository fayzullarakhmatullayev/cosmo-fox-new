<!-- token-pie-chart.vue -->
<template>
  <client-only>
    <div class="chart">
      <vue-apex-charts ref="chartRef" type="donut" :options="options" :series="seriesWithGaps" width="370" />
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

type ItemType = {
  id: number;
  colors: string[];
  category: string;
  tokens: number;
  vesting: string;
};

const props = defineProps<{
  items: ItemType[];
  hoveredItem: ItemType | null;
}>();

const emit = defineEmits(["update:hoveredItem"]);
const chartRef = ref(null);

// Create series with gaps between slices
const seriesWithGaps = computed(() => {
  const result: number[] = [];
  const gapSize = 8; // Size of gap slices

  props.items.forEach((item, index) => {
    result.push(item.tokens);
    // Add gap after each slice except the last one
    if (index < props.items.length - 1) {
      result.push(gapSize);
    }
  });

  // Add final gap to close the circle
  result.push(gapSize);

  return result;
});

// Create colors array including transparent gaps
const colorsWithGaps = computed(() => {
  const result: string[] = [];

  props.items.forEach((item, index) => {
    result.push(item.colors[0]!);
    // Add transparent color for gap
    if (index < props.items.length - 1) {
      result.push("transparent");
    }
  });

  // Add transparent color for final gap
  result.push("transparent");

  return result;
});

// Create gradient colors array including transparent gaps
const gradientColorsWithGaps = computed(() => {
  const result: string[] = [];

  props.items.forEach((item, index) => {
    result.push(item.colors[1]!);
    // Add transparent gradient for gap
    if (index < props.items.length - 1) {
      result.push("transparent");
    }
  });

  // Add transparent gradient for final gap
  result.push("transparent");

  return result;
});

// Convert chart index to item index (accounting for gaps)
const getItemIndexFromChartIndex = (chartIndex: number) => {
  // Every odd index is a gap, every even index is an actual slice
  if (chartIndex % 2 === 1) return null; // This is a gap
  return Math.floor(chartIndex / 2);
};

// Method to simulate chart hover from external trigger
const simulateChartHover = (itemIndex: number | null) => {
  if (!chartRef.value) return;

  // @ts-expect-error `$el` is a valid property
  const chartElement = chartRef.value.$el;
  const allSlices = chartElement.querySelectorAll(".apexcharts-series path");

  // Reset all slices
  allSlices.forEach((slice: HTMLElement) => {
    slice.style.transform = "scale(1)";
    slice.style.transformOrigin = "center";
    slice.style.transition = "transform 0.2s ease-out";
  });

  if (itemIndex !== null) {
    const chartIndex = itemIndex * 2;
    if (allSlices[chartIndex]) {
      const targetSlice = allSlices[chartIndex] as HTMLElement;
      targetSlice.style.transform = "scale(1.1)";
      targetSlice.style.transformOrigin = "center";
      targetSlice.style.transition = "transform 0.2s ease-out";
    }
  }
};

// Watch for external hover changes (from table)
watch(
  () => props.hoveredItem,
  newItem => {
    if (newItem) {
      const itemIndex = props.items.findIndex(item => item.id === newItem.id);
      simulateChartHover(itemIndex);
    } else {
      simulateChartHover(null);
    }
  }
);

// Expose method to parent component
defineExpose({
  simulateChartHover
});

const options = computed(() => ({
  chart: {
    type: "donut",
    background: "transparent",
    events: {
      dataPointMouseEnter: function (event: any, chartContext: any, config: any) {
        const chartIdx = config.dataPointIndex;
        const itemIndex = getItemIndexFromChartIndex(chartIdx);

        // Ignore hover on gap slices
        if (itemIndex === null) return;

        const slice = chartContext.w.globals.dom.baseEl.querySelector(
          `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
        );
        if (slice) {
          slice.style.transform = "scale(1.1)";
          slice.style.transformOrigin = "center";
          slice.style.transition = "transform 0.2s ease-out";
        }
        const hoveredItem = props.items[itemIndex];
        emit("update:hoveredItem", hoveredItem);
      },
      dataPointMouseLeave: function (event: any, chartContext: any, config: any) {
        const chartIdx = config.dataPointIndex;
        const itemIndex = getItemIndexFromChartIndex(chartIdx);

        // Ignore hover on gap slices
        if (itemIndex === null) return;

        const slice = chartContext.w.globals.dom.baseEl.querySelector(
          `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
        );
        if (slice) {
          slice.style.transform = "scale(1)";
        }
        emit("update:hoveredItem", null);
      }
    }
  },
  labels: { show: false },
  legend: { show: false },
  dataLabels: { enabled: false },
  stroke: {
    width: 0
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "65%",
        background: "transparent"
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      gradientToColors: gradientColorsWithGaps.value,
      stops: [0, 100]
    }
  },
  colors: colorsWithGaps.value,
  tooltip: {
    enabled: false
  },
  states: {
    hover: {
      filter: { type: "none" }
    },
    active: {
      filter: { type: "none" },
      allowMultipleDataPointsSelection: false
    }
  }
}));
</script>

<style lang="scss">
.apexcharts-canvas .apexcharts-series {
  path {
    transition: transform 0.2s ease-out;
    transform-origin: center;

    // Hide hover effects on transparent gap slices
    &[fill="transparent"] {
      pointer-events: none;
    }
  }
}

.chart {
  .apexcharts-svg {
    overflow: visible; // Allow expanded slices to be visible outside bounds
  }
}
</style>
