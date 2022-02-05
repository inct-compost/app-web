<template lang="pug">
#bottom-navi
  .route
    div(
      v-for="item in routeData"
    )
      .link-button.p-4.w-16(
        @click="pushRoute(item.path)"
      )
        svg(viewBox="0 0 24 24")
          path(
            :d="nowPath === item.path ? item.icon : item.iconOutline"
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
  mdiChevronRight,
} from '@mdi/js'

export default defineComponent({
  name: 'NaviBar',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const routeData = ref([
      {
        path: '/',
        name: 'DashBoard',
        icon: mdiViewDashboard,
        iconOutline: mdiViewDashboardOutline,
      },
      {
        path: '/table',
        name: 'DataTable',
        icon: mdiTable,
        iconOutline: mdiTableBorder,
      },
    ])

    // let, computed
    const nowPath = computed(() => {
      return route.value.fullPath
    })

    // watch

    // methods
    const pushRoute = (path: string) => {
      router.push(path)
    }

    // lifeCycle

    // other

    return {
      mdiChevronRight,

      nowPath,
      routeData,

      pushRoute,
    }
  },
})
</script>

<style lang="scss">
#bottom-navi {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 64px;

  bottom: 0%;
  left: 0%;

  background-color: $background;

  .route {
    display: flex;
    justify-content: space-around;

    .link-button {
      position: relative;
      z-index: 2;

      fill: $green;
      cursor: pointer;

      &:hover::before {
        position: absolute;
        z-index: -1;
        content: '';
        width: calc(64px - 24px);
        height: calc(64px - 24px);

        border-radius: 0.75rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: rgba(128, 128, 128, 0.2);
      }
    }

    .link-now {
      & {
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

        top: 8px;
        left: 50%;
        transform: translate(-50%, -4px);

        border-radius: 8px;
        background-color: $green;
      }
    }
  }

  .footer {
    position: absolute;

    bottom: 0%;

    fill: $green
  }
}
</style>
