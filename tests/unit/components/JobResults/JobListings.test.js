import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useRoute } from 'vue-router'
vi.mock('vue-router')

import JobListings from '@/components/JobResults/JobListings.vue'
import { useJobsStore } from '@/stores/jobs'

describe('JobListings', () => {
  const renderJobListings = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    jobsStore.FILTERED_JOBS = Array(15).fill({})

    render(JobListings, {
      global: {
        plugins: [pinia],

        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    return { jobsStore }
  }

  it('fetches jobs', () => {
    useRoute.mockReturnValue({ query: {} })

    const { jobsStore } = renderJobListings()

    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled('http://mytestapi.com/jobs')
  })

  it('displays maximum of 10 jobs', async () => {
    useRoute.mockReturnValue({ query: { page: '1' } })

    const { jobsStore } = renderJobListings()

    jobsStore.FILTERED_JOBS = Array(15).fill({})

    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })

  describe('when params exclude page number', () => {
    it('displays page number 1', () => {
      useRoute.mockReturnValue({ query: {} })

      renderJobListings()

      expect(screen.getByText('Page 1')).toBeInTheDocument()
    })
  })

  describe('when params include page number', () => {
    it('displays page number', () => {
      useRoute.mockReturnValue({ query: { page: '3' } })

      renderJobListings()

      expect(screen.getByText('Page 3')).toBeInTheDocument()
    })
  })

  describe('when user is on the first page', () => {
    it('does not show link to previous page', async () => {
      useRoute.mockReturnValue({ query: { page: '1' } })

      const { jobsStore } = renderJobListings()

      jobsStore.FILTERED_JOBS = Array(15).fill({})

      await screen.findAllByRole('listitem')
      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).not.toBeInTheDocument()
    })

    it('shows link to next page', async () => {
      useRoute.mockReturnValue({ query: { page: '1' } })

      const { jobsStore } = renderJobListings()

      jobsStore.FILTERED_JOBS = Array(15).fill({})

      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).toBeInTheDocument()
    })
  })
  describe('when user is on the last page', () => {
    it('does not show link to next page', async () => {
      useRoute.mockReturnValue({ query: { page: '2' } })

      const { jobsStore } = renderJobListings()

      jobsStore.FILTERED_JOBS = Array(15).fill({})

      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).not.toBeInTheDocument()
    })

    it('shows link to previous page', async () => {
      useRoute.mockReturnValue({ query: { page: '2' } })

      const { jobsStore } = renderJobListings()

      jobsStore.FILTERED_JOBS = Array(15).fill({})

      await screen.findAllByRole('listitem')
      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).toBeInTheDocument()
    })
  })
})
