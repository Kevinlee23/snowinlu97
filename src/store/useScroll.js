import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    scrollEl: null,
  }),
  actions: {
    setElement(el) {
      this.scrollEl = el
    },
  },
})
