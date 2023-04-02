import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia()
    const userStore = useUserStore()
    const jobsStore = useJobsStore()

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesome: true
        }
      }
    })
    return { jobsStore, userStore }
  }

  it('renders unique list of organizations from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarOrganizations()
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Apple', 'Google'])

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizations = organizationListItems.map((node) => node.textContent)

    expect(organizations).toEqual(['Apple', 'Google'])
  })

  it('communicates that user has selected checkbox for organization', async () => {
    const { jobsStore, userStore } = renderJobFiltersSidebarOrganizations()
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Apple', 'Google'])

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const googleCheckbox = screen.getByRole('checkbox', {
      name: /google/i
    })
    await userEvent.click(googleCheckbox)

    expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google'])
  })
})
