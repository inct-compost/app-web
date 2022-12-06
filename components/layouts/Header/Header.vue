<template>
  <div id="header">
    <div class="left-contents" v-text="currentHeaderTitle?.title" />
    <div class="right-contents">
      <Button
        is-icon
        icon="notifications"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { currentHeaderTitle } = headerTitle()
const { displayTypeMixin } = displayStatus()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#header {
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: v-bind("displayTypeMixin({ sm: '0px 0px 1em 0px', lp: '0px 1em', pc: '0px 1em' })");

  .left-contents {
    font-weight: bold;
    font-size: 1.25rem;
    color: v-bind("colorStore.color.theme.text");
  }

  .right-contents {

  }
}
</style>
