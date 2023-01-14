/**
 * viewport の `svh` と同じ画面サイズを求める変数
 */
export const useSvh = () => {
  const documentElement = ref<HTMLElement>()
  documentElement.value = document.documentElement

  const svh = useCssVar('--svh', documentElement)

  const setSvh = () => {
    svh.value = window.innerHeight * 0.01 + 'px'
  }

  useEventListener(window, 'resize', setSvh)

  setSvh()

  return {
    svh
  }
}
