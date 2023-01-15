<template>
  <div
    v-if="sm"
    id="bottomNavigationBar"
    :class="colorModeStore.colorMode"
  >
    <div class="buttons">
      <div
        v-for="link in links"
        :key="link.name"
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
const colorModeStore = useColorModeStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { sm } = displayStatus()
const route = useRoute()

const links = ref<ILinks[]>([
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: '/dashboard'
  },
  {
    name: 'top',
    icon: 'home',
    path: '/'
  },
  {
    name: 'setting',
    icon: 'settings',
    path: '/setting'
  }
])

const openPage = computed(() => {
  const matchPath = links.value.filter(link => route.path === link.path)[0]
  return matchPath || {
    name: 'top',
    icon: 'home',
    path: '/'
  }
})

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#bottomNavigationBar {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 99;
  width: 100%;
  height: 64px;
  left: 0px;
  bottom: 0px;
  padding: 0px 2em;

  box-sizing: border-box;

  &.light {
    background: linear-gradient(180deg, #f3f3f300 0%, #f3f3f399 31.25%, #f3f3f3f2 65.18%, #F3F3F3 100%);
  }

  &.dark {
    background: linear-gradient(180deg, #1A1A1A00 0%, #1A1A1A99 31.25%, #1A1A1Af2 65.18%, #1A1A1A 100%);
  }

  .buttons {
    display: flex;
    justify-content: space-around;

    width: 100%;
  }
}
</style>
