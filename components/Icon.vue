<template lang="pug">
#icon
  svg(viewBox="0 0 24 24")
    path(
      :d="icon"
      :fill="color"
    )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: '#489384',
    },
  },
  setup () {

  },
})
</script>

<style lang="scss">
#icon {
  width: 24px;
  height: 24px;
}
</style>
