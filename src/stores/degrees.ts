import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import getDegrees from '@/api/getDegrees'
import type { Degree } from '@/api/types'

export const useDegreesStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([])

  const FETCH_DEGREES = async () => {
    const receivedDegrees = await getDegrees()
    degrees.value = receivedDegrees
  }

  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree))

  return { degrees, FETCH_DEGREES, UNIQUE_DEGREES }
})
