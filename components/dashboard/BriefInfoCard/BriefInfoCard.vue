<template>
  <div id="briefInfoCard">
    <Card
      :style="{
        marginBottom: '1em'
      }"
    >
      <span>
        現在は
        <span
          class="data-text"
          v-text="type === 'temperature' ? nowTemprature : nowWaterAmount"
        />
        <span v-if="type === 'temperature'">
          °C
        </span>
        &#xFF08;
        <span class="binary-difference" v-text="type === 'temperature' ? temperatureBinaryDifference : waterAmountBinaryDifference" />
        &#65289;
      </span>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { sensingDataListType } from '~/types/composables/firebase/sensingDataList'

/* -- type, interface -- */
export interface IBriefInfoCardProps {
  type: 'temperature' | 'waterAmount'
  sensingDataList: sensingDataListType
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IBriefInfoCardProps>(), {
})

/* -- variable(ref, reactive, computed) -- */
const nowTemprature = computed(() => {
  return props.sensingDataList.length ? props.sensingDataList[props.sensingDataList!.length - 1]?.temperature : 0
})

const nowWaterAmount = computed(() => {
  return props.sensingDataList.length ? props.sensingDataList[props.sensingDataList!.length - 1]?.waterAmount : 0
})

const temperatureBinaryDifference = computed(() => {
  let binaryDifference = nowTemprature.value - (props.sensingDataList.length ? props.sensingDataList[props.sensingDataList!.length - 2]?.temperature : 0)
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
  let binaryDifference = nowWaterAmount.value - (props.sensingDataList.length ? props.sensingDataList[props.sensingDataList!.length - 2]?.waterAmount : 0)
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
</script>

<style lang="scss" scoped>
#briefInfoCard {
  width: 640px;
  max-width: calc(100%);

  .data-text {
    margin: 0px 0.25em;

    line-height: 2rem;
    font-weight: 700;
    font-size: 2rem;
  }

  .binary-difference {
    font-weight: 700;
  }
}
</style>
