<template>
  <div id="index">
    index
    {{ accessibleHardwareIdsStore.accessibleHardwareIdList }}
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayTypeMixin } = displayStatus()
useSensingDataStore()
const accessibleHardwareIdsStore = useAccessibleHardwareIdsStore()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
onMounted(() => {
  accessibleHardwareIdsStore.getAccessibleHardwareIds()
})

definePageMeta({
  title: 'Index',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#index {
  color: v-bind("displayTypeMixin({ sm: 'red', lp: 'blue', pc: 'green' })");
}
</style>
