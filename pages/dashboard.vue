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
        chart-title="今日の温度推移"
        :sensing-data-list="sensingDataList"
        data-name="temperature"
      />
      <DataTable
        :sensing-data-list="sensingDataList"
        type="temperature"
      />
      <Card
        icon="smart_button"
        title="その他のアクション"
      >
        <Button
          icon="history"
        >
          過去のデータを見る
        </Button>
      </Card>
    </div>

    <div
      v-if="(selectedTab.index === 1)"
      class="waterAmount-tab"
    >
      <BriefInfoCard type="waterAmount" :sensing-data-list="sensingDataList" />
      <Chart
        chart-title="今日の水分量推移"
        :sensing-data-list="sensingDataList"
        data-name="waterAmount"
      />
      <DataTable
        :sensing-data-list="sensingDataList"
        type="waterAmount"
      />
      <Card
        icon="smart_button"
        title="その他のアクション"
      >
        <Button
          icon="history"
        >
          過去のデータを見る
        </Button>
      </Card>
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
    padding-bottom: calc(40px + 0.5rem + 0.8rem + 1rem);

    .temperature-tab, .waterAmount-tab {
      display: flex;
      flex-flow: column;
      row-gap: 3rem;
    }
  }

  &.lp, &.pc {
    .temperature-tab, .waterAmount-tab {
      /* 1388px未満はレイアウトが崩れる */
      display: grid;
      grid-template-columns: auto minmax(640px, 1fr);
      grid-template-rows: auto auto;
      row-gap: 3rem;
      column-gap: 1rem;

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
        grid-row: 2;
        grid-column: 2;
      }
    }
  }
}
</style>
