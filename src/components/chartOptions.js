export const options = {
  title: {
    text: "Price Evolution",
    style: { "color": "#ffffff", "fontSize": "20px" }
  },

  yAxis: {
    title: {
      text: ""
    },
    min: -80,
    max: 80,
    gridLineWidth: 1,
    minorGridLineWidth: 1,
    lineColor: '#ffffff2e',
    gridLineColor: '#ffffff2e',
    labels: {
      style: {
        color: 'white'
      }
    }

  },

  xAxis: {
    gridLineWidth: 1,
    minorGridLineWidth: 1,
    gridLineColor: '#ffffff2e',
    lineColor: '#ffffff2e',
    labels: {
      style: {
        color: 'white'
      },
    }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2014,
      color: '#02b5c4',
    }
  },

  series: [
    {
      name: "",
      data: [-5, -7, -20, 37, 55, 79]
    }
  ],

  legend: {
    enabled: false,
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,

        }
      }
    ]
  },
  chart: {
    backgroundColor: null
  }

}