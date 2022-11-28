<template>
  <div id="index">
    {{ sm }}
    {{ lp }}
    {{ pc }}
    {{ displayType }}
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { sm, lp, pc, displayType, displayTypeMixin } = displayStatus()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'Index'
})
</script>

<style lang="scss" scoped>
#index {
  color: v-bind("displayTypeMixin({ sm: 'red', lp: 'blue', pc: 'green' })");
}
</style>
