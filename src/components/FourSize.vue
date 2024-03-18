<script lang="ts" setup>
import draggable from 'vuedraggable'
import type { Task } from './type'

const props = defineProps({
  oneList: { type: Array<Task>, default: () => [] },
  twoList: { type: Array<Task>, default: () => [] },
  threeList: { type: Array<Task>, default: () => [] },
  fourList: { type: Array<Task>, default: () => [] },
})
const emit = defineEmits(['update:oneList', 'update:twoList', 'update:threeList', 'update:fourList'])

const _1stModel = useVModel(props, 'oneList', emit)
const _2stModel = useVModel(props, 'twoList', emit)
const _3stModel = useVModel(props, 'threeList', emit)
const _4stModel = useVModel(props, 'fourList', emit)
const currentId: ComputedRef<number> = computed(() => {
  return props.oneList.length + props.twoList.length + props.threeList.length + props.fourList.length + 1
})

function clone(item: Task) {
  return item
}
</script>

<template>
  <div class="w-full h-screen">
    <div class="">
      <n-button type="primary">
        123
      </n-button>
    </div>
    <div class="w-full h-full flex items-center justify-center">
      <div class="flex flex-wrap w-[602px] gap-[1px]">
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="w-[300px] h-[300px] border-[1px] border-[#333]"
        >
          {{ `${item}stList` }}
          <draggable
            v-if="item === 1"
            class="w-full h-full"
            :list="_1stModel"
            :group="{ name: 'people', pull: true }"
            :clone="clone"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                {{ element.title }}
              </div>
            </template>
          </draggable>
          <draggable
            v-if="item === 2"
            class="w-full h-full"
            :list="_2stModel"
            :group="{ name: 'people', pull: true }"
            :clone="clone"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                {{ element.title }}
              </div>
            </template>
          </draggable>
          <draggable
            v-if="item === 3"
            class="w-full h-full"
            :list="_3stModel"
            :group="{ name: 'people', pull: true }"
            :clone="clone"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                {{ element.title }}
              </div>
            </template>
          </draggable>
          <draggable
            v-if="item === 4"
            class="w-full h-full"
            :list="_4stModel"
            :group="{ name: 'people', pull: true }"
            :clone="clone"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                {{ element.title }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sortable-ghost {
  @apply text-white bg-[#ffd111];
}

.list-group-item {
  @apply py-1;

}
</style>
