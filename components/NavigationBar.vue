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
  .footer
    .p-4.w-16.h-16
      svg(viewBox="0 0 24 24")
        path(
          :d="mdiChevronRight"
          fill="#489384"
        )
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
      mdiChevronRight,

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

  .route {
    .link-button {
      & {
        position: relative;
        z-index: 2;

        color: $primary;
        cursor: pointer;
      }

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

        top: 50%;
        left: 8px;
        transform: translate(-4px, -50%);

        border-radius: 8px;
        background-color: $primary-darken-1;
      }
    }
  }

  .footer {
    position: absolute;

    bottom: 0%;
  }
}
</style>
