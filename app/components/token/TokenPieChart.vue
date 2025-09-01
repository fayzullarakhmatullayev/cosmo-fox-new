<template>
  <client-only>
    <div class="chart">
      <vue-apex-charts
        ref="chartRef"
        type="donut"
        :options="options"
        :series="seriesWithGaps"
        :width="chartSize"
        :height="chartSize"
      />
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
  isMobile: boolean;
}>();

const emit = defineEmits(["update:hoveredItem"]);
const chartRef = ref(null);

const chartSize = computed(() => (props.isMobile ? 160 : 320));

const seriesWithGaps = computed(() => {
  const result: number[] = [];
  const gapSize = 8;

  props.items.forEach((item, index) => {
    result.push(item.tokens);

    if (index < props.items.length - 1) {
      result.push(gapSize);
    }
  });

  result.push(gapSize);

  return result;
});

const colorsWithGaps = computed(() => {
  const result: string[] = [];

  props.items.forEach((item, index) => {
    result.push(item.colors[0]!);

    if (index < props.items.length - 1) {
      result.push("transparent");
    }
  });

  result.push("transparent");

  return result;
});

const gradientColorsWithGaps = computed(() => {
  const result: string[] = [];

  props.items.forEach((item, index) => {
    result.push(item.colors[1]!);

    if (index < props.items.length - 1) {
      result.push("transparent");
    }
  });

  result.push("transparent");

  return result;
});

const getItemIndexFromChartIndex = (chartIndex: number) => {
  if (chartIndex % 2 === 1) return null;
  return Math.floor(chartIndex / 2);
};

const simulateChartHover = (itemIndex: number | null) => {
  if (!chartRef.value) return;

  // @ts-expect-error `$el` is a valid property
  const chartElement = chartRef.value.$el;
  const allSlices = chartElement.querySelectorAll(".apexcharts-series path");

  allSlices.forEach((slice: HTMLElement) => {
    slice.style.transform = "scale(1)";
    slice.style.transformOrigin = "center";
    slice.style.transition = "transform 0.2s ease-out";
    // Safari-specific fix: Force repaint
    slice.style.willChange = "transform";
  });

  if (itemIndex !== null) {
    const chartIndex = itemIndex * 2;
    if (allSlices[chartIndex]) {
      const targetSlice = allSlices[chartIndex] as HTMLElement;
      targetSlice.style.transform = "scale(1.1)";
      targetSlice.style.transformOrigin = "center";
      targetSlice.style.transition = "transform 0.2s ease-out";
      // Safari-specific fix: Force repaint
      targetSlice.style.willChange = "transform";
    }
  }
};

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

        if (itemIndex === null) return;

        const slice = chartContext.w.globals.dom.baseEl.querySelector(
          `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
        );
        if (slice) {
          slice.style.transform = "scale(1.1)";
          slice.style.transformOrigin = "center";
          slice.style.transition = "transform 0.2s ease-out";
          // Safari-specific fix: Force repaint
          slice.style.willChange = "transform";
          slice.style.backfaceVisibility = "hidden";
          slice.style.perspective = "1000px";
        }
        const hoveredItem = props.items[itemIndex];
        emit("update:hoveredItem", hoveredItem);
      },
      dataPointMouseLeave: function (event: any, chartContext: any, config: any) {
        const chartIdx = config.dataPointIndex;
        const itemIndex = getItemIndexFromChartIndex(chartIdx);

        if (itemIndex === null) return;

        const slice = chartContext.w.globals.dom.baseEl.querySelector(
          `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
        );
        if (slice) {
          slice.style.transform = "scale(1)";
          // Safari-specific fix: Reset properties
          slice.style.willChange = "auto";
          slice.style.backfaceVisibility = "visible";
          slice.style.perspective = "none";
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
.apexcharts-canvas {
  position: relative;
  z-index: 1;

  .apexcharts-series {
    overflow: visible !important;

    path {
      transition: transform 0.2s ease-out;
      transform-origin: center;
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;

      position: relative;
      z-index: 2;

      &[fill="transparent"] {
        pointer-events: none;
      }

      &:hover {
        z-index: 10;
        position: relative;
      }
    }
  }
}

.chart {
  overflow: visible !important;

  .apexcharts-svg {
    overflow: visible !important;

    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .apexcharts-canvas,
  .apexcharts-inner {
    overflow: visible !important;
  }
}

@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .chart {
      position: relative;
      z-index: 1;

      .apexcharts-series path {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
    }
  }
}
</style>
