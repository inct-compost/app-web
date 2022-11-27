<template>
  <div id="default-layout">
    <NavigationBar />
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
#default-layout {
  display: grid;
  grid-template-columns: 64px 1fr;

  position: relative;
  width: 100%;
  height: 100%;

  .contents {
    padding: 1em;
  }
}
</style>
