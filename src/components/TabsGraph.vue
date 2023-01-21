<template>
  <div class="graph">
    <!-- v-if="points.length && ip === points[0].ip" -->

    <!-- <img
      v-if="ip === '192.168.88.50'"
      src="http://pikstok.ru/images/images/1528372927887.jpg"
      alt=""
    />
    <img
      v-if="ip === '192.168.88.51'"
      src="https://klike.net/uploads/posts/2018-10/1539499416_1.jpg"
      alt=""
    />
    <img
      v-if="ip === '192.168.88.52'"
      src="http://www.psy.msu.ru/illusion/upside_down/m_w.gif"
      alt=""
    /> -->

    <LineChartGenerator
      :options="chartOptions"
      :data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
  <!-- <div v-else>NO DATA</div> -->
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'TabsGraph',
  components: {
    LineChartGenerator
  },
  props: {
    ip: {
      type: String,
      default: ''
    },
    points: {
      type: Array,
      required: true
    },
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    pointsX() {
      return this.points
    }
  },
  mounted() {
    if (this.points.length) {
      console.log('this.points[0]', this.points[0].points)
    }
  }
}
</script>

<style></style>
