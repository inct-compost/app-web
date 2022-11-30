<template>
  <div id="dashboard">
    dashboard
    {{ sensingDataStore.sensingDataList }}
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
