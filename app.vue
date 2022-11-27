<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import 'material-symbols'
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
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}
</style>
