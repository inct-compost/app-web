<template>
  <Button
    is-icon
    :icon="colorModeStore.colorMode === 'dark' ? 'dark_mode' : 'light_mode'"
    @click="switchMode()"
  />
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const switchMode = () => {
  if (colorModeStore.colorMode === 'dark') {
    colorModeStore.setLight()
  } else {
    colorModeStore.setDark()
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>
