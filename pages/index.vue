<template>
  <div>
    {{ events }}
    <button @click="getEvents()">get events</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import useSupabase from "../plugin/supabase"

export default defineComponent({
  setup() {
    const { supabase } = useSupabase()

    let events

    const getEvents = async () => {
      events = await supabase.from("profiles").select("*")
      console.log(events)
    }

    return {
      events,
      getEvents,
    }
  },
})

/* export default {
  data() {
    return {
      events: null,
    };
  },
  methods: {
    async getEvents() {
      this.events = await this.$supabase.from("profiles").select("*");
    },
  },
}; */
</script>
