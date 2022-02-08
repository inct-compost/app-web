<template lang="pug">
.container
  Header(title="Data Table")
  .contents(style="width: 100%; height: 100%")
    DataTable(:sensing-data="Data")
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
} from '@nuxtjs/composition-api'
import getSensingData from '~/composable/getSensingData'
import DataTable from '~/components/dataTable/DataTable.vue'
import Header from '~/components/utils/Header.vue'

export default defineComponent({
  components: { DataTable, Header },
  setup () {
    // const
    const Data = ref()
    // computed
    // methods
    // lifeCycle
    onBeforeMount(async () => {
      const { sensingData } = await getSensingData()
      Data.value = sensingData
      console.log(Data)
    })
    // other
    return {
      Data,
    }
  },
})
</script>

<style lang="scss">

</style>
