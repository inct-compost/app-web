<template>
  <div id="dataTable">
    <Card class="dataTable-wrapper" height="calc(100% - 2rem - 3px)">
      <div class="title">
        <Icon
          icon="table_chart"
          :color="colorStore.color.theme.subText"
        />
        <p>データテーブル</p>
      </div>
      <div class="content">
        <table>
          <thead>
            <tr>
              <th>日時</th>
              <th>値</th>
              <th>前値差</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
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
const { sensingDataList } = toRefs(props)

/* -- function -- */
const calculateBinaryDifference = (index: number) => {
  let binaryDifference = 0
  const sensingDataListLength = props.sensingDataList.length

  if (sensingDataListLength) {
    if (props.type === 'temperature') {
      const temprature = props.sensingDataList[index]?.temperature

      if (index === 0) { // index === sensingDataListLength - 1
        return '-'
      } else {
        binaryDifference = temprature - props.sensingDataList[index - 1]?.temperature // [index + 1]
      }
    } else if (props.type === 'waterAmount') {
      const temprature = props.sensingDataList[index]?.waterAmount

      if (index === 0) { // index === sensingDataListLength - 1
        return '-'
      } else {
        binaryDifference = temprature - props.sensingDataList[index - 1]?.waterAmount // [index + 1]
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
  max-height: 680px;

  .dataTable-wrapper {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);

    position: relative;
    width: 100%;
    max-height: calc(680px - 2em);

    overflow-y: hidden;

    .title {
      grid-row: 1;

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

    .content {
      overflow-y: auto;
    }

    table {
      grid-row: 2;

      width: 100%;
      max-height: 200px;

      overflow-y: auto;

      thead {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: v-bind("colorStore.color.theme.card");
      }

      th {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
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

        overflow-y: auto;
      }
    }
  }
}
</style>
