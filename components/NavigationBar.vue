<template lang="pug">
#navi
  .logo
    .p-4.w-16.h-16
  .route
    div(v-for="item in routeData")
      .link-button.p-4.w-16(
        @click="pushRoute(item.path)"
      )
        svg(viewBox="0 0 24 24")
          path(
            :d="nowPath === item.path ? item.icon : item.iconOutline"
            fill="#489384"
          )
        .link-now(v-if="nowPath === item.path")
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import {
  mdiViewDashboardOutline,
  mdiViewDashboard,
  mdiTable,
  mdiTableBorder,
} from '@mdi/js';

export default defineComponent({
  name: 'NaviBar',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const routeData = ref([
      {
        path: '/',
        name: 'DashBoard',
        icon: mdiViewDashboard,
        iconOutline : mdiViewDashboardOutline
      },
      {
        path: '/table',
        name: 'DataTable',
        icon: mdiTable,
        iconOutline : mdiTableBorder
      },
    ])

    // let, computed
    const nowPath =  computed(() => {
      return route.value.fullPath
    })

    console.log(nowPath)

    // watch

    // methods
    const pushRoute = (path: string) => {
      router.push(path)
    }

    // lifeCycle

    // other

    return {
      nowPath,
      routeData,
      pushRoute,
    }
  },
})
</script>

<style lang="scss">
#navi {
  position: fixed;
  z-index: 10;
  width: 64px;
  height: 100%;

  top: 0%;
  left: 0%;

  background-color: $white;

  .route{
    .link-button {
      & {
        position: relative;
        z-index: 2;
        color: $primary;
      }
    }

    .link-now {
      &{
        position: absolute;
        z-index: 1;
        width: 64px;
        height: 64px;

        top: 0%;
        left: 0%;
      }

      &::after {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;

        top: 50%;
        left: 8px;
        transform: translate(-4px, -50%);

        border-radius: 8px;
        background-color: $primary-darken-1;
      }
    }
  }
}
</style>
