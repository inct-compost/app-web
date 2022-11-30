<template>
  <div id="dashboard">
    <div
      v-for="sensingData in sensingDataStore.sensingDataList"
      :key="sensingData.id"
    >
      {{ sensingData }}
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const sensingDataStore = useSensingDataStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

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
