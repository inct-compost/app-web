<template lang="pug">
.container.mx-auto
  h1.text-5xl.py-4 compost-dashboard-app
  div(v-for="item in events")
    | {{ item }}
  button(
    @click="getEvents()"
  ).rounded-3xl.bg-red-400
    p.p-4 Get Events
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
    // const data:
    const { supabase } = useSupabase()

    // let data: computed data:
    let events = ref()

    // methods:
    const getEvents = async () => {
      let { data, error, status } = await supabase.from("sensingData").select("*")
      console.log(data, error, status)
      return data
    }


    // life cycle
    onBeforeMount(async() => {
      events.value = await getEvents()
    })

    // other
    console.log(events)


    return {
      events,
      getEvents,
    }
  },
})
</script>

<style lang="scss">

</style>
