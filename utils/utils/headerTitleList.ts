import { IconNameType } from '~/types/icon/IconNameType'

interface IHeaderTitle {
  path: string
  icon?: IconNameType
  title: string
}

export const headerTitle = () => {
  const headetTitleList = ref<Array<IHeaderTitle>>([
    {
      path: '/',
      title: 'IoTコンポスト｜ホーム'
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

  const isCurrentPath = (path: string) => {
    return useRoute().fullPath === path
  }

  return {
    headetTitleList,
    currentHeaderTitle,
    isCurrentPath
  }
}
