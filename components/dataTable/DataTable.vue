<template lang="pug">
#data-table
  .top-bar
    .top-bar-item(v-for="topBarItem in topBarItemList")
      | {{ topBarItem.title }}
  .table-item
    .table-item-data(v-for="(item, index) in sensingData")
      div(v-text="item.id + topBarItemList[0].unit")
      .temperature
        // ToDo: 一つ前のデータを参照して上がったか下がったを見ているが、Functionsであらかじめそのデータを入れておきたい
        Icon.ml-6(
          :icon="index < sensingData.length - 1 ? returnDifference(sensingData[index + 1].temperature, item.temperature).icon : null"
          :color="index < sensingData.length - 1 ? returnDifference(sensingData[index + 1].temperature, item.temperature).color : null"
        )
        span(v-text="item.temperature + topBarItemList[1].unit")
      div(v-text="item.humidity + topBarItemList[2].unit")
      div(v-text="item.soilTemperature + topBarItemList[3].unit")
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  PropType,
} from '@nuxtjs/composition-api'
import {
  mdiArrowUpBoldCircle,
  mdiArrowDownBoldCircle,
} from '@mdi/js'

interface sensingDataType {
  id: string,
  temperature: number,
  humidity: number,
  soilTemperature: number,
}

export default defineComponent({
  props: {
    sensingData: {
      type: Array as PropType<sensingDataType[]>,
      default: () => ([{
        id: 'YY_MM_DD_HH_MM',
        temperature: 0,
        humidity: 0,
      }]),
    },
  },
  setup () {
    // const
    const topBarItemList = reactive([
      {
        title: 'Date',
        unit: '',
      },
      {
        title: 'Temperature',
        unit: '℃',
      },
      {
        title: 'Humidity',
        unit: '%',
      },
      {
        title: 'Soil Temperature',
        unit: '℃',
      },
    ])

    // computed
    // methods
    const returnDifference = (minuend: number, subtrahend: number) => {
      const difference = minuend - subtrahend
      if (difference < 0) {
        return {
          icon: mdiArrowUpBoldCircle,
          color: '#3B7579',
        }
      } else if (difference > 0) {
        return {
          icon: mdiArrowDownBoldCircle,
          color: '#283266',
        }
      } else {
        return {
          icon: null,
          color: null,
        }
      }
    }

    // lifeCycle

    return {
      topBarItemList,
      returnDifference,
    }
  },
})
</script>

<style lang="scss">
#data-table {
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));

  border-radius: 16px;
}

.top-bar {
  &{
    position: relative;
    grid-row: 1;
    width: 100%;
    min-height: 50px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    text-align: center;
    line-height: 50px;
    border-radius: 16px 16px 16px 16px;

    color: $white;
    background-color: $blue_grrenish_lighten_1;
  }

  /* &::before {
    position: absolute;
    content: '';

    width: 100%;
    height: 1px;

    background-color: $blue_grrenish_lighten_1;
  } */

  &-item{
    padding: 0px 16px;
  }
}

.table-item {
  &{
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
  }

  &-data {
    padding: 16px 0px 16px 0px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

.table-item-data {
  position: relative;
  text-align: center;

  cursor: pointer;

  &:hover::before {
    position: absolute;
    content: '';
    z-index: -1;

    width: 100%;
    height: 100%;

    border-radius: 16px;

    background-color: rgba(128, 128, 128, 0.1);
  }

  &::after {
    position: absolute;
    content: '';

    bottom: 0px;

    width: 100%;
    height: 1px;

    background: $gray;
  }
}

.temperature {
  display: flex;
  justify-content: space-between;
}
</style>
