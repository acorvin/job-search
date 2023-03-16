import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs'

describe('JobFiltersSidebarOrganizations', () => {
  it('renders unique list of organizations from jobs', async () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Apple', 'Google'])

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesome: true
        }
      }
    })

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizations = organizationListItems.map((node) => node.textContent)

    expect(organizations).toEqual(['Apple', 'Google'])
  })
})
