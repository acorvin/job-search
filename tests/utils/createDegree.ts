import type { Degree } from '@/api/types'

export const createDegree = (degree: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Master's",
  ...degree
})
