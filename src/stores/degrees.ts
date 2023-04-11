import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Degree } from '@/api/types'

export const useDegreesStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([])

  return { degrees }
})
