<template>
  <div
    id="maturityLevelCard"
    :class="`level-${compostLevel}`"
  >
    <div class="title">
      <Icon
        icon="donut_large"
        fill
        :color="colorStore.color.theme.background"
      />
      完成度
    </div>
    <div class="maturity-detail">
      <div class="level">
        <span class="">
          {{ maturityLevel }}
        </span>
        %
      </div>
      <hr>
      <p class="msg">
        {{ msg }}
      </p>
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
const sensingDataStore = useSensingDataStore()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const maturityLevel = computed(() => {
  /**
   * 0%の時の水分量
   */
  const minimum = 210
  /**
   * 100%の時の水分量
   */
  const maximum = 130
  if (sensingDataStore.nowWaterAmount) {
    if (sensingDataStore.nowWaterAmount > minimum) {
      return 0
    } else {
      return Math.round(100 - ((sensingDataStore.nowWaterAmount - maximum) * (100 / (minimum - maximum))))
    }
  } else {
    return 'NaN'
  }
})

const msg = computed(() => {
  if (maturityLevel.value <= 0) {
    return 'まだ成熟は始まっていません。トイレを利用することで菌が活動し始めます。'
  } else if (maturityLevel.value < 95) {
    return '順調に成熟中です。このまま使い続けてください。'
  } else if (maturityLevel.value < 105) {
    return '堆肥が完成しました！\n できるだけ早めに畑等に撒いてくださいね。'
  } else {
    return '成熟しすぎかもしれません...。\nコンポスト内を確認して、水っぽかった場合はコンポスト内をすぐに交換してください。'
  }
})

const compostLevel = computed(() => {
  if (maturityLevel.value <= 0) {
    return 0
  } else if (maturityLevel.value < 95) {
    return 1
  } else if (maturityLevel.value < 105) {
    return 2
  } else {
    return 3
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#maturityLevelCard {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;

  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;

  box-sizing: border-box;
  border-radius: 0.5em;
  color: v-bind("colorStore.color.theme.background");

  .title {
    display: inline-flex;
    justify-content: center;
    column-gap: 0.5rem;
  }

  .maturity-detail {
    display: flex;
    flex-flow: column;
    align-items: flex-end;

    width: 100%;

    .level {

      font-size: 2.5rem;
      font-weight: bold;

      span {
        font-size: 5rem;
      }
    }

    hr {
      width: 100%;
      border: none;
      border-bottom: solid 1px v-bind("colorStore.color.theme.background");
    }

    .msg {
      margin: 0px;

      white-space: pre-wrap;
    }
  }

  &.level-0 {
    background: linear-gradient(300deg, #00376A 12%, #86C5FF 100%);
  }

  &.level-1 {
    background: linear-gradient(300deg, #EDC96D 12%, #86C5FF 100%);
  }
  &.level-2 {
    background: linear-gradient(300deg, #34B16E 12%, #86C5FF 100%);
  }

  &.level-3 {
    background: linear-gradient(300deg, #ED6D6D 12%, #86C5FF 100%);
  }
}
</style>
