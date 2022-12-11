<template>
  <div id="index" :class="displayType">
    <div class="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill" />
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill" />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill" />
      </svg>
    </div>
    <div class="maturity">
      <div class="text">
        <span class="title">
          完成度
        </span>
        <span class="now-water-amount" v-text="maturityLevel" />
        <div class="data">
          <p>水分量｜{{ nowWaterAmount }}</p>
          <p>温度｜{{ nowTemperature }}°C</p>
        </div>
        <span class="msg" v-text="msg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/*
空気中で215
乾いた基材:211
だんだん水入れて許容値:211〜150
くらいかな
去年コンポストやった感覚だと130くらいで交換したい感じ
110〜100とかはもう泥水な感じ

210以上：0%
210~130：0~100%

*/

/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()
const sensingDataStore = useSensingDataStore()
const colorStore = useColorStore()

const nowWaterAmount = computed(() => {
  const sensingDataList = sensingDataStore.sensingDataList

  if (sensingDataList.length) {
    return sensingDataList[sensingDataList.length - 1].waterAmount
  } else {
    return null
  }
})

const nowTemperature = computed(() => {
  const sensingDataList = sensingDataStore.sensingDataList

  if (sensingDataList.length) {
    return sensingDataList[sensingDataList.length - 1].temperature
  } else {
    return null
  }
})

const maturityLevel = computed(() => {
  /**
   * 0%の時の水分量
   */
  const minimum = 210
  /**
   * 100%の時の水分量
   */
  const maximum = 130
  if (nowWaterAmount.value) {
    if (nowWaterAmount.value > minimum) {
      return 0
    } else {
      return Math.round(100 - ((nowWaterAmount.value - maximum) * (100 / (minimum - maximum))))
    }
  } else {
    return 'NaN'
  }
})

const msg = computed(() => {
  if (maturityLevel.value <= 0) {
    return 'まだ成熟は始まっていません。トイレを利用することで菌が活動し始めます。'
  } else if (maturityLevel.value < 95) {
    return '順調に成熟中です。今の状態を維持しましょう。'
  } else if (maturityLevel.value < 105) {
    return '堆肥として完成しました！コンポストの中身を取り出してください。'
  } else {
    return '成熟しすぎてしまっています...。すぐにコンポストの中を空にしてください。'
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
  align-items: center;
  justify-content: center;

  position: relative;
  height: calc(100% - 3px);

  overflow: hidden;
  border-radius: 16px;
  border: solid 1px v-bind("colorStore.color.white.darken[2]");

  .wave {
    position: absolute;
    width: calc(100% + 3px);
    height: calc(v-bind("maturityLevel + '%'"));
    bottom: 0%;

    background-color: v-bind("maturityLevel <= 105 ? colorStore.color.green.default : colorStore.color.red.lighten[1]");

    svg path {
      fill: v-bind("colorStore.color.theme.background");
    }
  }

  .maturity {
    align-self: center;
    justify-self: center;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    width: minmax(240px, 400px);
    height: minmax(240px, 400px);
    padding: 1em;

    overflow: hidden;
    // background-color: v-bind("colorStore.color.white.default");
    // border: solid 1.5px v-bind("colorStore.color.white.darken[2]");
    border-radius: 8px;

    .title {
      display: inline-flex;
      align-items: center;

    }

    .text {
      display: flex;
      flex-flow: column;

      position: relative;

      .now-water-amount {
        position: relative;
        margin-bottom: 0.5rem;

        font-size: 3rem;
        font-weight: bold;

        &::after {
          content: '%';
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }

    .msg {
      padding-top: 0.5em;
      margin-top: 0.5em;

      border-top: solid 1px v-bind("maturityLevel <= 105 ? colorStore.color.green.lighten[1] : colorStore.color.red.lighten[2]");
    }

    .data {
      p {
        margin: 0.5rem 0px;

        font-weight: 500;
      }
    }
  }

  &.lp, &.pc {
    grid-template-columns: 1fr 1fr 1fr;

    .maturity {
      grid-column: 1;
    }
  }

  &.sm {
    grid-template-columns: 1fr;
  }
}
</style>
