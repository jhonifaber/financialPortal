<template>
  <div class="graph-wrapper">
    <highcharts :options="chartOptions" class="chart"></highcharts>
  </div>
</template>

<script>
import { options } from "./chartOptions";
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: options
    };
  },
  components: {
    highcharts: Chart
  }
};
</script>

<style scoped>
.graph-wrapper {
  margin: 0 auto;
}

@media (max-width: 768px) {
  .graph-wrapper,
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>



