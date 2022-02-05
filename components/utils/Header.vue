<template lang="pug">
.header
  div(class="title md:text-3xl text-base font-semibold") {{ title }}
    // Icon(:icon="mdiGithub")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiGithub } from '@mdi/js'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup () {
    return {
      mdiGithub,
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
