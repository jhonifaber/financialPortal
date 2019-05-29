export const options = {
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
        borderWidth: 1,
        backgroundColor: null
      }

}