<template>
  <div id="app">
    <NuxtLayout :name="layout">
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
const authStore = useAuthStore()
const sensingDataStore = useSensingDataStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()
const layout = computed(() => {
  if (!authStore.loggedInUser.uid) {
    return 'no-nav-bar'
  } else if (displayType.value === 'sm') {
    return 'smartphone'
  } else {
    return 'default'
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
sensingDataStore.onSnapshotSensingData()
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
