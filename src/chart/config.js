// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top'
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart'
//       }
//     }
//   }
// }
import Chart from 'chart.js/auto'

export default class Graph {
  constructor(container, points) {
    this.container = container
    this.points = points
    // this.timer = setTimeout(callback, duration)
  }
}

const speedCanvas = document.getElementById('content')

Chart.defaults.font.family = 'Teko'
Chart.defaults.font.size = 22
Chart.defaults.color = 'black'

let speedData = {
  labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
  datasets: [
    {
      label: 'Car Speed (mph)',
      data: [0, 59, 75, 20, 20, 55, 40]
    }
  ]
}

let lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData
})

console.log('lineChart', lineChart)
