<template>
  <div class="graph-wrapper">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import options from "./chartOptions";
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: "Price Evolution"
        },

        yAxis: {
          title: {
            text: ""
          },
          min: -100
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2014
          }
        },

        series: [
          {
            name: "",
            data: [-5, -7, -20, 37, 55, 79]
          }
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        },
        chart: {
          renderTo: "containter",
          backgroundColor: null
        }
      }
    };
  },
  components: {
    highcharts: Chart
  }
};
</script>

<style scoped>
.graph-wrapper {
  /* min-width: 310px;
  max-width: 800px;
  height: 400px; */
  margin: 0 auto;
}
</style>



