<template>
  <div id="app">
    <VitePwaManifest />
    <Meta name="theme-color" :content="colorStore.color.theme.background" />
    <NuxtLoadingIndicator />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()
const authStore = useAuthStore()
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()
const route = useRoute()

const layout = computed(() => {
  const isSetup = route.path.includes('/setup')
  if (!authStore.loggedInUser.uid) {
    return 'no-nav-bar'
  } else if (isSetup) {
    return 'setup'
  } else if (displayType.value === 'sm') {
    return 'smartphone'
  } else {
    return 'default'
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
useSvh()
</script>

<style lang="scss">
html, body {
  margin: 0px;

  font-family: 'Noto Sans JP', sans-serif;
  overscroll-behavior-y: none;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[1]");
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
}

#app {
  width: 100vw;
  height: calc(var(--svh, 1vh) * 100);
  max-height: calc(var(--svh, 1vh) * 100);
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}
</style>
