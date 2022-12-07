<template>
  <div id="dataTable">
    <Card height="calc(100% - 2rem - 3px)">
      <div class="title">
        <Icon
          icon="table_chart"
          :color="colorStore.color.theme.subText"
        />
        <p>データテーブル</p>
      </div>
      <table>
        <tr>
          <th>日時</th>
          <th>値</th>
          <th>前値差</th>
        </tr>
        <tr
          v-for="(sensingData, index) in sensingDataList"
          :key="sensingData.id"
        >
          <td>{{ sensingData.month }}/{{ sensingData.day }}&ensp;{{ sensingData.hour }}:{{ sensingData.minute }}</td>
          <td class="value">
            {{ type === 'temperature' ? sensingData.temperature : sensingData.waterAmount }}
          </td>
          <td>{{ calculateBinaryDifference(index) }}</td>
        </tr>
      </table>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { sensingDataListType } from '~/types/composables/firebase/sensingDataList'

/* -- type, interface -- */
export interface IDataTableProps {
  type: 'temperature' | 'waterAmount'
  sensingDataList: sensingDataListType
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IDataTableProps>(), {
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const calculateBinaryDifference = (index: number) => {
  let binaryDifference = 0
  const sensingDataListLength = props.sensingDataList.length
  if (sensingDataListLength) {
    if (props.type === 'temperature') {
      const temprature = props.sensingDataList[props.sensingDataList!.length - index]?.temperature
      if (sensingDataListLength === index + 1 || index === 0) {
        return '-'
      } else {
        binaryDifference = temprature - props.sensingDataList[props.sensingDataList!.length - index - 1]?.temperature
      }
    } else if (props.type === 'waterAmount') {
      const temprature = props.sensingDataList[props.sensingDataList!.length - index]?.waterAmount
      if (sensingDataListLength === index + 1 || index === 0) {
        return '-'
      } else {
        binaryDifference = temprature - props.sensingDataList[props.sensingDataList!.length - index - 1]?.waterAmount
      }
    }
  } else {
    return 'NaN'
  }

  binaryDifference = Math.floor(binaryDifference * 10) / 10
  if (binaryDifference > 0) {
    return `+${binaryDifference}`
  } else if (binaryDifference < 0) {
    return `${binaryDifference}`
  } else {
    return `±${binaryDifference}`
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#dataTable {
  width: 100%;
  height: 100%;

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

  table {
    width: 100%;

    th {
      padding: 1rem 0px;

      color: v-bind("colorStore.color.theme.subText");
      text-align: start;
      border-bottom: solid 1px v-bind("colorStore.color.theme.complementaryDarken[2]");
    }

    td {
      padding: 1rem 0px;
      text-align: start;

      &.value {
        font-weight: 700;
      }
    }
  }
}
</style>
