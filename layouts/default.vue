<template lang="pug">
div
  BottomNavigationBar(v-if="display === 'mobile'")
  NavigationBar(v-else)
  div.pt-20.p-4(
    :style="{minHeight: '100vh', paddingLeft: display === 'mobile' ? '' : '80px'}"
  )
    Nuxt
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
} from '@vue/composition-api/'

export default defineComponent({
  setup () {
    // const
    const display = ref('')

    // let, computed
    /* const display = computed(() => {
      const size = ref(window.outerWidth)

      if (size.value < 960) {
        return 'mobile'
      } else {
        return 'desktop'
      }
    }) */

    // methods
    const resizeEventListener = () => {
      const size = ref(window.innerWidth)

      if (size.value < 960) {
        display.value = 'mobile'
      } else {
        display.value = 'desktop'
      }
      console.log(display.value)
    }

    // lifeCycle
    onMounted(() => {
      window.addEventListener('resize', resizeEventListener)
      resizeEventListener()
    })

    // other

    return {
      display,
    }
  },
})
</script>

<style lang="scss">
html {
  width: 100vw;
  height: 100vh;

  font-family: 'Noto Sans JP', sans-serif;
}
body {
  background-color: $background;
}
</style>
