<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import 'material-icons/iconfont/material-icons.css'
import { registerSW } from 'virtual:pwa-register'

registerSW()
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */

</script>

<style lang="scss">
html, body {
  min-height: 100vh;
  margin: 0px;
}

#app {
  min-height: 100vh;
  background-color: v-bind("colorStore.color.theme.background");
}
</style>
