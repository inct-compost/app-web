<template>
  <div id="default-layout">
    <NavigationBar />
    <Header />
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
#default-layout {
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-rows: 56px 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  .contents {
    grid-column: 2;
    grid-row: 2;
    padding: 1em;
  }
}
</style>
