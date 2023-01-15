<template>
  <div
    v-if="displayType === 'sm'"
    id="index"
    :class="displayType"
  >
    <MaturityLevelCard />
    <div class="recent-conditions-card">
      <span class="title">現在の状態</span>
      <div class="row">
        <Icon
          icon="device_thermostat"
        />
        <p>
          <span class="value">
            {{ sensingDataStore.nowTemperature }}
          </span>
          °C（{{ temperatureBinaryDifference }}）
        </p>
      </div>
      <div class="row">
        <Icon
          icon="humidity_mid"
        />
        <p>
          <span class="value">
            {{ sensingDataStore.nowWaterAmount }}
          </span>
        </p>
        （{{ waterAmountBinaryDifference }}）
      </div>
    </div>
    <Button
      icon="dashboard"
      :icon-props="{
        fill: true
      }"
      :color="colorStore.color.theme.text"
      to="/dashboard"
    >
      ダッシュボードで詳細を見る
    </Button>
  </div>
  <div
    v-else
    id="index"
    :class="displayType"
  >
    <MaturityLevelCard />
    <div class="data-list">
      <BriefInfoCard type="temperature" :sensing-data-list="sensingDataList" />
      <BriefInfoCard type="waterAmount" :sensing-data-list="sensingDataList" />
      <Button
        icon="dashboard"
        :icon-props="{
          fill: true
        }"
        :color="colorStore.color.theme.text"
        to="/dashboard"
      >
        ダッシュボードで詳細を見る
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sensingDataListType } from '~/types/composables/firebase/sensingDataList'

/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const sensingDataStore = useSensingDataStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()

const sensingDataList = computed((): sensingDataListType => {
  return sensingDataStore.sensingDataList.map((sensingData) => {
    return sensingData
  })
})

const temperatureBinaryDifference = computed(() => {
  let binaryDifference = sensingDataStore.nowTemperature! - (sensingDataStore.sensingDataList.length ? sensingDataStore.sensingDataList[sensingDataStore.sensingDataList!.length - 2]?.temperature : 0)
  binaryDifference = Math.floor(binaryDifference * 10) / 10

  if (binaryDifference > 0) {
    return `+${binaryDifference}`
  } else if (binaryDifference < 0) {
    return `${binaryDifference}`
  } else {
    return `±${binaryDifference}`
  }
})

const waterAmountBinaryDifference = computed(() => {
  let binaryDifference = sensingDataStore.nowWaterAmount! - (sensingDataStore.sensingDataList.length ? sensingDataStore.sensingDataList[sensingDataStore.sensingDataList!.length - 2]?.waterAmount : 0)
  binaryDifference = Math.floor(binaryDifference * 10) / 10

  if (binaryDifference > 0) {
    return `+${binaryDifference}`
  } else if (binaryDifference < 0) {
    return `${binaryDifference}`
  } else {
    return `±${binaryDifference}`
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
})

definePageMeta({
  title: 'Index',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#index {
  display: grid;
  align-items: flex-start;
  justify-content: center;

  position: relative;
  height: calc(100% - 3px);

  overflow: hidden;

  .recent-conditions-card {
    display: flex;
    flex-flow: column;
    row-gap: 0.5rem;

    .title {
      color: v-bind("colorStore.color.theme.subText");
    }

    .row {
      display: inline-flex;
      align-items: center;
      column-gap: 1rem;

      margin-left: 1rem;

      p {
        margin: 0px;

        .value {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }

  }

  .data-list {
    display: flex;
    flex-flow: column;
    row-gap: 2rem;

    padding: 1.5rem 1rem;
  }

  &.lp, &.pc {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.sm {
    grid-template-rows: 1fr min-content min-content;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
}
</style>
