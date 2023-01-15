<template>
  <div
    v-if="lp || pc"
    id="navigationBar"
  >
    <div class="buttons">
      <div
        v-for="link in links"
        :key="link.name"
        :style="{
          marginBottom: '2em'
        }"
      >
        <Button
          is-icon
          :icon="link.icon"
          :to="link.path"
          :icon-props="{
            fill: openPage.path === link.path ? true : false,
            color: openPage.path === link.path ? colorStore.color.theme.text : colorStore.color.theme.darken[1]
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/IconNameType'

/* -- type, interface -- */
interface ILinks {
  name: string
  icon: IconNameType
  path: string
}

/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { lp, pc } = displayStatus()
const route = useRoute()

const links = ref<ILinks[]>([
  {
    name: 'top',
    icon: 'home',
    path: '/'
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: '/dashboard'
  },
  {
    name: 'setting',
    icon: 'settings',
    path: '/setting'
  }
])

/* -- function -- */
const openPage = computed(() => {
  const matchPath = links.value.filter(link => route.path === link.path)[0]
  return matchPath || {
    name: 'top',
    icon: 'home',
    path: '/'
  }
})
/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationBar {
  grid-column: 1;
  grid-row: 1/3;

  display: flex;
  justify-content: center;

  padding: 2em 0px;
}
</style>
