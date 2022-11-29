<template>
  <div id="default-layout">
    <NavigationBar />
    <Header :header-title="currentHeaderTitle.title" />
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
interface IHeaderTitle {
  path: string
  icon?: IconNameType
  title: string
}

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const headetTitleList = ref<Array<IHeaderTitle>>([
  {
    path: '/',
    title: '○○のコンポスト'
  },
  {
    path: '/dashboard',
    icon: 'dashboard',
    title: 'ダッシュボード'
  },
  {
    path: '/setting',
    icon: 'settings',
    title: '設定'
  }
])

const currentHeaderTitle = computed(() => {
  return headetTitleList.value.filter(headerTitle => headerTitle.path === useRoute().fullPath)[0]
})

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
