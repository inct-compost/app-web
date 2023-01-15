<template>
  <div id="setting">
    <SignInButton />
    <ColorModeButton />
    <Button
      is-icon
      icon="refresh"
      @click="reload()"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const reload = () => {
  window.location.reload()
}

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Setting',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#setting {
  display: flex;
  flex-flow: column;
}
</style>
