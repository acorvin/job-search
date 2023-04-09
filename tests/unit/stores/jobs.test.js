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

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [{ jobType: 'Full-time' }, { jobType: 'Temporary' }, { jobType: 'Full-time' }]
      const result = store.UNIQUE_JOB_TYPES

      expect(result).toEqual(new Set(['Full-time', 'Temporary']))
    })
  })

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = []
        const store = useJobsStore()
        const job = { organization: 'Apple' }

        const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })

    it('identifies if job is associated with given organizations', () => {
      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Apple', 'Google']
      const store = useJobsStore()
      const job = { organization: 'Apple' }

      const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

      expect(result).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = []
        const store = useJobsStore()
        const job = { jobType: 'Full-time' }

        const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })

    it('identifies if job is associated with given job types', () => {
      const userStore = useUserStore()
      userStore.selectedJobTypes = ['Full-time', 'Part-time']
      const store = useJobsStore()
      const job = { jobType: 'Full-time' }

      const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

      expect(result).toBe(true)
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

    describe('When the user has not selcted any organizations', () => {
      it('returns all jobs', () => {
        const jobsStore = useJobsStore()
        jobsStore.jobs = [
          { organization: 'Apple' },
          { organization: 'Google' },
          { organization: 'Microsoft' }
        ]
        const userStore = useUserStore()
        userStore.selectedOrganizations = []

        const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS

        expect(result).toEqual([
          { organization: 'Apple' },
          { organization: 'Google' },
          { organization: 'Microsoft' }
        ])
      })
    })
  })

  describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
    it('identifies jobs that are associated with given job types', () => {
      const jobsStore = useJobsStore()
      jobsStore.jobs = [
        { jobType: 'Full-time' },
        { jobType: 'Temporary' },
        { jobType: 'Part-time' }
      ]
      const userStore = useUserStore()
      userStore.selectedJobTypes = ['Full-time', 'Part-time']

      const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES

      expect(result).toEqual([{ jobType: 'Full-time' }, { jobType: 'Part-time' }])
    })
    describe('when the user has not selected any job types', () => {
      it('returns all jobs', () => {
        const jobsStore = useJobsStore()
        jobsStore.jobs = [
          { jobType: 'Full-time' },
          { jobType: 'Temporary' },
          { jobType: 'Part-time' }
        ]
        const userStore = useUserStore()
        userStore.selectedJobTypes = []

        const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES

        expect(result).toEqual([
          { jobType: 'Full-time' },
          { jobType: 'Temporary' },
          { jobType: 'Part-time' }
        ])
      })
    })
  })
})
