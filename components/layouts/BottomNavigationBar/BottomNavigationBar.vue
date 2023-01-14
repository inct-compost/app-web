<template>
  <div
    v-if="sm"
    id="bottomNavigationBar"
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
  width: 100%;
  height: 64px;
  left: 0px;
  bottom: 0px;
  padding: 0px 2em;

  background: linear-gradient(180deg, #F3F3F3 0%, rgba(243, 243, 243, 0) 0.01%, rgba(243, 243, 243, 0.8) 35.42%, #F3F3F3 100%);
  box-sizing: border-box;

  .buttons {
    display: flex;
    justify-content: space-around;

    width: 100%;
  }
}
</style>
