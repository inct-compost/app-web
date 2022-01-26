<template lang="pug">
.container
  Header(title="DashBoard")
  div(v-for="item in events")
    | {{ item }}
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  ssrPromise,
  onBeforeMount,
} from "@nuxtjs/composition-api"
import useSupabase from "../plugin/supabase"

export default defineComponent({
  setup() {
    // const
    const { supabase } = useSupabase()

    // let, computed
    let events = ref()

    // methods
    const getEvents = async () => {
      let { data, error, status } = await supabase.from("sensingData").select("*")
      console.log(data, error, status)
      return data
    }

    // lifeCycle
    onBeforeMount(async() => {
      events.value = await getEvents()
    })

    // other


    return {
      events,
      getEvents,
    }
  },
})
</script>

<style lang="scss">

</style>
