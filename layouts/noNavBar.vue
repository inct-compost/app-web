<template>
  <div id="no-nav-bar-layout">
    <div class="contents">
      <slot />
    </div>
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
</script>

<style lang="scss" scoped>
#no-nav-bar-layout {
  display: grid;
  grid-template-columns: 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  .contents {
    padding: 0em;
  }
}
</style>
