import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

vi.mock('axios')

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()

    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('FETCH_JOBS', () => {
    it('makes an api request and stores received jobs', async () => {
      axios.get.mockResolvedValue({ data: ['Job 1', 'Job 2'] })

      const store = useJobsStore()

      await store.FETCH_JOBS()

      expect(store.jobs).toEqual(['Job 1', 'Job 2'])
    })
  })
})

// Test Getters
describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from last jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        { organization: 'Apple' },
        { organization: 'Google' },
        { organization: 'Apple' }
      ]

      const result = store.UNIQUE_ORGANIZATIONS

      expect(result).toEqual(new Set(['Google', 'Apple']))
    })
  })

  describe('FILTERED_JOBS_BY_ORGANIZATIONS', () => {
    it('identifies jobs associated with given organizations', () => {
      const jobsStore = useJobsStore()
      jobsStore.jobs = [
        { organization: 'Apple' },
        { organization: 'Google' },
        { organization: 'Microsoft' }
      ]
      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Apple', 'Microsoft']

      const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS
      expect(result).toEqual([{ organization: 'Apple' }, { organization: 'Microsoft' }])
    })
  })
})
