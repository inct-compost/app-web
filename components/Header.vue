<template lang="pug">
.header
  div(class="title md:text-2xl text-base font-semibold") Compost DashBoard
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
  setup() {
    return {

    }
  },
})
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  height: 64px;

  top: 0%;

  .title {
    line-height: 64px;
  }
}
</style>
