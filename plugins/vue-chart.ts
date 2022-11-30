import * as vueChartjs from 'vue-chartjs'
import zoomPlugin from 'chartjs-plugin-zoom'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  zoomPlugin
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('bar-chart', vueChartjs.Bar)
  nuxtApp.vueApp.component('doughnut-chart', vueChartjs.Doughnut)
  nuxtApp.vueApp.component('line-chart', vueChartjs.Line)
  nuxtApp.vueApp.component('pie-chart', vueChartjs.Pie)
  nuxtApp.vueApp.component('polar-area-chart', vueChartjs.PolarArea)
  nuxtApp.vueApp.component('radar-chart', vueChartjs.Radar)
  nuxtApp.vueApp.component('bubble-chart', vueChartjs.Bubble)
  nuxtApp.vueApp.component('scatter-chart', vueChartjs.Scatter)
})
