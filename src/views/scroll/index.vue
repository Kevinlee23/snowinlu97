<script lang="js" setup>
import useVertialScroll from '@/hooks/use-vertial-scroll'
import { useScrollStore } from '@/store/useScroll'

const wrapEl = ref(null)
const scrollStore = useScrollStore()
const scrollEl = computed(() => scrollStore.scrollEl)
const { barHeight } = useVertialScroll(scrollEl, wrapEl)

const data = ref((Array.from({ length: 100 })).fill('滚动内容'))
</script>

<template>
  <div ref="wrapEl" class="flex">
    <div class="w-[5px] h-full">
      <div class="fixed top-0 w-[5px] bg-[#ffd111]" :style="{ height: `${barHeight}px` }" />
    </div>
    <div class="flex-1">
      <div v-for="(item, index) in data" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>
