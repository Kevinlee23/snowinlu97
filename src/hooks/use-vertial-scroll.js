export default function useVertialScroll(scrollEl, wrapEl) {
  const { y: scrollY } = useScroll(scrollEl) // 滚动对象的y距
  const { height: windowH } = useWindowSize() // 窗口的高度
  const { height: wrapH } = useElementSize(wrapEl) // 滚动对象的高度

  const barHeight = ref(0) // 计算得出的

  watch([scrollY, wrapH], () => {
    const rat = scrollY.value / (wrapH.value - windowH.value)

    barHeight.value = rat * windowH.value
  })

  return { barHeight }
}
