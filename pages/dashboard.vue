<template>
  <div id="dashboard" :class="displayType">
    <Tab
      v-model:model-value="selectedTab"
      :tab-names="tabNames"
    />
    <div
      v-if="selectedTab.index === 0"
      class="temperature-tab"
    >
      <BriefInfoCard type="temperature" :sensing-data-list="sensingDataList" />
      <Chart
        chart-title="今日の温度チャート"
        :sensing-data-list="sensingDataList"
        data-name="temperature"
      />
      <DataTable />
      <Button
        icon="history"
      >
        過去のデータを見る
      </Button>
    </div>

    <div
      v-if="(selectedTab.index === 1)"
      class="waterAmount-tab"
    >
      <BriefInfoCard type="waterAmount" :sensing-data-list="sensingDataList" />
      <Chart
        chart-title="今日の水分量チャート"
        :sensing-data-list="sensingDataList"
        data-name="waterAmount"
      />
      <Button
        icon="history"
        :color="colorStore.color.blue.default"
      >
        過去のデータを見る
      </Button>
    </div>
    <!-- <div
      v-for="sensingData in sensingDataStore.sensingDataList"
      :key="sensingData.id"
    >
      {{ sensingData }}
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { sensingDataListType } from '~/types/composables/firebase/sensingDataList'
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */

/* -- store -- */
const sensingDataStore = useSensingDataStore()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()

const sensingDataList = computed((): sensingDataListType => {
  return sensingDataStore.sensingDataList.map((sensingData) => {
    return sensingData
  })
})

const selectedTab = ref({
  name: '土壌温度',
  index: 0
})
const tabNames = ref<Array<{
    name: string
    icon: IconNameType
  }>>([
    {
      name: '土壌温度',
      icon: 'device_thermostat'
    },
    {
      name: '水分量',
      icon: 'water_drop'
    }
  ])

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Dashboard',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#dashboard {
  &.sm {
    .temperature-tab, .waterAmount-tab {
      display: flex;
      flex-flow: column;

      #chart {
        grid-row: 2;
        grid-column: 1;

        margin-bottom: 1rem;
      }

      #dataTable {
        grid-row: 1/3;
        grid-column: 2;

        margin-bottom: 1rem;
      }
    }
  }

  &.lp, &.pc {
    .temperature-tab, .waterAmount-tab {
      /* 1388px未満はレイアウトが崩れる */
      display: grid;
      grid-template-columns: auto minmax(640px, 1fr);
      grid-template-rows: auto auto;

      #briefInfoCard {
        grid-row: 1;
        grid-column: 1;

        margin-right: 1rem;
      }

      #chart {
        grid-row: 2;
        grid-column: 1;
      }

      #dataTable {
        grid-row: 1/3;
        grid-column: 2;
      }
    }
  }
}
</style>
