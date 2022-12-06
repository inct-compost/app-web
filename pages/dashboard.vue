<template>
  <div id="dashboard">
    <Tab
      v-model:model-value="selectedTab"
      :tab-names="tabNames"
    />
    <div
      v-if="selectedTab.index === 0"
      class="temperature-tab"
    >
      <Chart
        chart-title="今日の温度チャート"
        title-icon="device_thermostat"
        :sensing-data-list="sensingDataList"
        data-name="temperature"
      />
    </div>
    <div
      v-if="(selectedTab.index === 1)"
      class="waterAmount-tab"
    >
      <Chart
        chart-title="今日の水分量チャート"
        title-icon="device_thermostat"
        :sensing-data-list="sensingDataList"
        data-name="waterAmount"
      />
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

/* -- type, interface -- */

/* -- store -- */
const sensingDataStore = useSensingDataStore()
const sensingDataList = computed((): sensingDataListType => {
  return sensingDataStore.sensingDataList.map((sensingData) => {
    return sensingData
  })
})

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const selectedTab = ref({
  name: '土壌温度',
  index: 0
})
const tabNames = ref([ '土壌温度', '水分量' ])

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

}
</style>
