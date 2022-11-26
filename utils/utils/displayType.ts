/**
 * 現在のスクリーンサイズを元に、スクリーンタイプを返す
 * @return スクリーンタイプ(sp, lp)
 */
export const displayType = () => {
  const breakpoints = useBreakpoints({
    sm: 640,
    lp: 1024
  })

  const sm = breakpoints.smallerOrEqual('sm')
  const lp = breakpoints.between('sm', 'lp')
  const pc = breakpoints.lp

  return { sm, lp, pc }
}
