<template lang="pug">
#data-table
  .top-bar
    .top-bar-item(v-for="topBarItem in topBarItemList")
      | {{ topBarItem.title }}
  .table-item
    .table-item-data(v-for="item in sensingData")
      div(v-text="item.id + topBarItemList[0].unit")
      div(v-text="item.temperature + topBarItemList[1].unit")
      div(v-text="item.humidity + topBarItemList[2].unit")
      div(v-text="item.soilTemperature + topBarItemList[3].unit")
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  PropType,
} from '@nuxtjs/composition-api'

interface sensingDataType {
  id: String,
  temperature: Number,
  humidity: Number,
  soilTemperature: Number,
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

    return {
      topBarItemList,
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
</style>
