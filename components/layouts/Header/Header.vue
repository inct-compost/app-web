<template>
  <div id="header">
    <div class="left-contents" v-text="headerTitle" />
    <div class="right-contents">
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IHeaderProps {
  headerTitle: string;
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IHeaderProps>(), {
  headerTitle: 'タイトル'
})

/* -- variable(ref, reactive, computed) -- */
const colorStore = useColorStore()

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

  padding: 0px 1em;

  .left-contents {
    font-weight: 500;
    font-size: 1.25em;
    color: v-bind("colorStore.color.theme.text");
  }

  .right-contents {

  }
}
</style>
