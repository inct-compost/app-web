<template>
  <div id="index" :class="displayType">
    <MaturityLevelCard />
  </div>
</template>

<script lang="ts" setup>

/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()

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
