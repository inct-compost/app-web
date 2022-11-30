<template>
  <div id="index">
    index
    <SignInButton />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayTypeMixin } = displayStatus()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Index',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#index {
  color: v-bind("displayTypeMixin({ sm: 'red', lp: 'blue', pc: 'green' })");
}
</style>
