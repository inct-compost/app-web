<template lang="pug">
.container.mx-auto
  h1.text-5xl datas: {{ events }}
  p text
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
  onMounted,
} from "@nuxtjs/composition-api"
import useSupabase from "../plugin/supabase"

export default defineComponent({
  setup() {
    // const data:
    const { supabase } = useSupabase()

    // let data: computed data:
    let events = reactive({})

    // methods:
    const getEvents = async () => {
      return await supabase.from("profiles").select("*")
    }

    events = getEvents()

    // life cycle
    onMounted(() => {
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
