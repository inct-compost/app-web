<template lang="pug">
.container
  Header(title="Data Table")
  .contents(v-for="(item, index) in Data")
    | {{ index }} {{ item }} <br>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onBeforeMount,
} from "@nuxtjs/composition-api"
import getSensingData from "~/composable/getSensingData"

export default defineComponent({
  setup() {
    // const
    const Data = ref()

    // let, computed


    // methods


    // lifeCycle
    onBeforeMount(async() => {
      const { sensingData } = await getSensingData()
      Data.value = sensingData
      console.log(Data)
    })

    // other


    return {
      Data
    }
  },
})
</script>

<style lang="scss">

</style>
