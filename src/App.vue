<script lang="js" setup>
import { NConfigProvider, NScrollbar, dateZhCN, zhCN } from 'naive-ui'
import { useScrollStore } from '@/store/useScroll'

const scrollEl = ref(null)
const { setElement } = useScrollStore()

// 修复 Naive UI 和 Tailwind 样式优先级引起的样式错误问题
useMutationObserver(
  document.head,
  () => {
    const naiveStyles = Array.from(
      document.head.querySelectorAll('style[cssr-id]'),
    )

    if (
      naiveStyles.find(style =>
        style.nextElementSibling
          ? !style.nextElementSibling.hasAttribute('cssr-id')
          : false,
      )
    ) {
      naiveStyles.forEach((style) => {
        document.head.appendChild(style)
      })
    }
  },
  {
    childList: true,
  },
)

watch(scrollEl, (val) => {
  if (val)
    setElement(scrollEl.value.scrollbarInstRef.containerRef)
})
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <div class="w-full h-[100vh] overflow-auto">
      <NScrollbar ref="scrollEl" class="w-full h-full">
        <div class="min-h-[100vh]">
          <RouterView />
        </div>
      </NScrollbar>
    </div>
  </NConfigProvider>
</template>

<style lang="scss" scoped>
</style>
