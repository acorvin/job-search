import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import { useRouter } from 'vue-router'
vi.mock('vue-router')

import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'

const useRouteMock = useRouter as Mock

describe('JobSearch component', () => {
  describe('when users submits form', () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = vi.fn()
      useRouteMock.mockReturnValue({ push })

      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })
      await userEvent.type(roleInput, 'Vue Developer')

      const locationInput = screen.getByRole('textbox', {
        name: /where?/i
      })
      await userEvent.type(locationInput, 'Los Angeles')

      const submitButton = screen.getByRole('button', {
        name: /search/i
      })
      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: { role: 'Vue Developer', location: 'Los Angeles' }
      })
    })
  })
})
