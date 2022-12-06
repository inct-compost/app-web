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
        :style="{
          marginBottom: '1em'
        }"
      />
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
        :style="{
          marginBottom: '1em'
        }"
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
    }
  }
}
</style>
