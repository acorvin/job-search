import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

describe('JobFiltersSidebarJobTypes', () => {
  const renderJobFiltersSidebarJobTypes = () => {
    const pinia = createTestingPinia()
    const userStore = useUserStore()
    const jobsStore = useJobsStore()

    render(JobFiltersSidebarJobTypes, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesome: true
        }
      }
    })
    return { jobsStore, userStore }
  }

  it('renders unique list of job types from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarJobTypes()
    jobsStore.UNIQUE_JOB_TYPES = new Set(['Full-time', 'Part-time'])

    const button = screen.getByRole('button', { name: /job types/i })
    await userEvent.click(button)

    const jobTypesListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypesListItems.map((node) => node.textContent)

    expect(jobTypes).toEqual(['Full-time', 'Part-time'])
  })

  it('communicates that user has selected checkbox for job type', async () => {
    const { jobsStore, userStore } = renderJobFiltersSidebarJobTypes()
    jobsStore.UNIQUE_JOB_TYPES = new Set(['Full-time', 'Part-time'])

    const button = screen.getByRole('button', { name: /job types/i })
    await userEvent.click(button)

    const fullTimeCheckbox = screen.getByRole('checkbox', {
      name: /full-time/i
    })
    await userEvent.click(fullTimeCheckbox)

    expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(['Full-time'])
  })
})
