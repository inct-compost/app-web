<template>
  <div id="chart" style="width: 600px;height:400px;" />
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core'
// Import bar charts, all suffixed with Chart
import { BarChart } from 'echarts/charts'
// Import the tooltip, title, rectangular coordinate system, dataset and transform components
// all suffixed with Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features'
// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers'

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
onMounted(() => {
  const myChart = echarts.init(document.getElementById('chart')!)

  myChart.setOption({
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    xAxis: {
      data: [ 'shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks' ]
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [ 5, 20, 36, 10, 10, 20 ]
      }
    ]
  })
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#chart {

}
</style>
