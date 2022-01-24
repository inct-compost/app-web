<template>
  <div>
    {{ events }}
    <button @click="getEvents()">
      get events
    </button>
  </div>
</template>

<script>
export default {
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
};
</script>