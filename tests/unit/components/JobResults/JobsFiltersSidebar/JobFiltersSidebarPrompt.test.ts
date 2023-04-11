import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import { useUserStore } from '@/stores/user'

import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue'

describe('JobFiltersSidebarPrompt', () => {
  describe('when user clicks Clear Filters button', () => {
    it('sends message to all of user job search filters', async () => {
      const pinia = createTestingPinia()
      const userStore = useUserStore()
      render(JobFiltersSidebarPrompt, {
        global: {
          plugins: [pinia]
        }
      })
      const button = screen.getByRole('button', { name: /clear filters/i })
      await userEvent.click(button)

      expect(userStore.CLEAR_USER_JOB_FILTER_SELECTIONS).toHaveBeenCalled()
    })
  })
})
