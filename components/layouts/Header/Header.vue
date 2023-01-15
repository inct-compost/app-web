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
const { currentHeaderTitle, isCurrentPath } = headerTitle()
const { displayType, displayTypeMixin } = displayStatus()

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

  padding: v-bind("displayTypeMixin({ sm: '1em 2em 1em 2em', lp: '0px 2em', pc: '0px 2em' })");
  border-bottom: solid v-bind("displayType === 'sm' && !isCurrentPath('/') ? '1px' : '0px'") v-bind("colorStore.color.theme.complementaryDarken[2]");

  .left-contents {
    font-weight: bold;
    font-size: 1rem;
    color: v-bind("colorStore.color.theme.text");
  }

  .right-contents {

  }
}
</style>
