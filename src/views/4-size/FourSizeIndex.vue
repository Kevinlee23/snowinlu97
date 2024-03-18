<script lang="ts" setup>
import type { Task } from '@/components/type'

const oneList: Ref<Task[]> = ref<Task[]>([{ id: '1', type: '0', title: 'task1' }])
const twoList: Ref<Task[]> = ref<Task[]>([{ id: '2', type: '1', title: 'task2' }])
const threeList: Ref<Task[]> = ref<Task[]>([{ id: '3', type: '2', title: 'task3' }])
const fourList: Ref<Task[]> = ref<Task[]>([{ id: '4', type: '3', title: 'task4' }])
</script>

<template>
  <div class="w-full h-screen">
    <FourSize :one-list :two-list :three-list :four-list />
  </div>
</template>

<style lang="scss" scoped>
.sortable-ghost {
  @apply text-[#1a5599];
}

.list-group-item {
  @apply py-1;

}
</style>../../components/type
