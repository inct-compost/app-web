<template>
  <div id="chart">
    <Card
      :icon="titleIcon"
      :title="chartTitle"
      height="100%"
    >
      <div id="echarts" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  DataZoomComponent,
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption,
  DataZoomComponentOption,
  MarkLineComponent,
  MarkPointComponent,
  MarkLineComponentOption,
  MarkPointComponentOption
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'
import { IconNameType } from '~/types/icon/IconNameType'
import { sensingDataListType } from '~/types/composables/firebase/sensingDataList'

/* -- type, interface -- */
type ECOptionType = echarts.ComposeOption<
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | MarkLineComponentOption
  | MarkPointComponentOption
  | DataZoomComponentOption
>

interface IChartProps {
  chartTitle: string,
  titleIcon?: IconNameType
  sensingDataList: sensingDataListType
  dataName: 'temperature' | 'waterAmount' | 'all'
}

/* -- store -- */
const colorStore = useColorStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IChartProps>(), {
  chartTitle: 'チャートタイトル',
  titleIcon: 'monitoring'
})

/* -- variable(ref, reactive, computed) -- */
const { sensingDataList, dataName } = toRefs(props)

const theme = echartsTheme()

const sensingDataListLength = computed(() => {
  return sensingDataList.value.length
})

const option = computed(() => {
  const baseOption: ECOptionType = {
    grid: {
      top: 16,
      bottom: 40,
      left: 40,
      right: 40
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: sensingDataList.value.map((sensingData) => {
        return `${sensingData.hour}:${sensingData.minute}`
      }),
      axisLabel: {
        formatter: '{value}'
      }
    },
    dataZoom: [
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [ 0 ],
        startValue: sensingDataListLength.value - 5,
        endValue: sensingDataListLength.value
      },
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [ 0 ],
        startValue: '0°C',
        endValue: '20°C'
      }
    ]
  }

  const tempOption: ECOptionType = {
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}°C'
      }
    },
    series: [
      {
        name: '土壌温度',
        type: 'line',
        smooth: true,
        data: sensingDataList.value.map((sensingData) => {
          return sensingData.temperature
        }),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [ { type: 'average', name: 'Avg' } ]
        },
        color: colorStore.color.green.default
      }
    ]
  }

  const wtrOption: ECOptionType = {
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: '水分量',
        type: 'line',
        smooth: true,
        data: sensingDataList.value.map((sensingData) => {
          return sensingData.waterAmount
        }),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [ { type: 'average', name: 'Avg' } ]
        },
        color: colorStore.color.blue.default
      }
    ]
  }

  return dataName.value === 'temperature' ? { ...baseOption, ...tempOption } : { ...baseOption, ...wtrOption }
})

/* -- function -- */
// Register the required components
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  MarkLineComponent,
  MarkPointComponent,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  DataZoomComponent
])

/* -- watch -- */
watch(sensingDataList, () => {
  const chart = echarts.init(document.getElementById('echarts')!, { renderer: 'svg' })
  chart.setOption(toRaw(option.value))
})

/* -- life cycle -- */
onMounted(() => {
  echarts.registerTheme(theme.themeName, theme.theme)
  const chart = echarts.init(document.getElementById('echarts')!, colorModeStore.colorMode === 'dark' ? 'custom' : 'light', { renderer: 'svg' })
  chart.setOption(toRaw(option.value))

  useEventListener(window, 'resize', () => {
    if (chart != null && chart !== undefined) {
      chart.resize()
    }
  })
})
</script>

<style lang="scss" scoped>
#chart {
  display: flex;
  flex-flow: column;

  width: 640px;
  max-width: 100%;
  max-height: 640px;

  border-radius: 8px;
  aspect-ratio: 1/1.5;

  .title {
    display: flex;

    margin-bottom: 1rem;

    p {
      margin: 0px;
      margin-left: 0.5rem;

      color: v-bind("colorStore.color.theme.text");
      font-weight: 600;
      font-family: 'Noto Sans JP', sans-serif;
    }
  }

  #echarts {
    width: 100%;
    height: 100%;

    user-select: none;
  }
}
</style>
