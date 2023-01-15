<template>
  <div id="setting">
    <SignInButton />
    <ColorModeButton />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Setting',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#setting {

}
</style>
