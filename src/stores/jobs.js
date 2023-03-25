import { defineStore } from 'pinia'

import getJobs from '@/api/getJobs'

import { useUserStore } from '@/stores/user'

export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const FILTERED_JOBS_BY_ORGANIZATIONS = 'FILTERED_JOBS_BY_ORGANIZATIONS'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs()
      this.jobs = jobs
    }
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set()
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization))
      return uniqueOrganizations
    },
    [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
      const userStore = useUserStore()
      return state.jobs.filter((job) => userStore.selectedOrganizations.includes(job.organization))
    }
  }
})
