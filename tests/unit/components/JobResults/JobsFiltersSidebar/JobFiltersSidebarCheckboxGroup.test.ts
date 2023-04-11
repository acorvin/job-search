import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'
import { useRouter } from 'vue-router'
vi.mock('vue-router')

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'
import { useUserStore } from '@/stores/user'

const useRouteMock = useRouter as Mock

describe('JobFiltersSidebarCheckboxGroup', () => {
  interface CheckboxGroupProps {
    uniqueValues: Set<string>
    action: Mock
  }
  const createProps = (props: Partial<CheckboxGroupProps> = {}): CheckboxGroupProps => ({
    uniqueValues: new Set(['Value A', 'Value B']),
    action: vi.fn(),
    ...props
  })
  const renderJobFiltersSidebarCheckboxGroup = (props: CheckboxGroupProps) => {
    const pinia = createTestingPinia({ stubActions: false })
    const userStore = useUserStore()

    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia]
      }
    })
    return { userStore }
  }

  it('renders unique list of values', () => {
    const props = createProps({
      uniqueValues: new Set(['Full-time', 'Part-time'])
    })
    renderJobFiltersSidebarCheckboxGroup(props)

    const jobTypesListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypesListItems.map((node) => node.textContent)

    expect(jobTypes).toEqual(['Full-time', 'Part-time'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for value', async () => {
      useRouteMock.mockReturnValue({ push: vi.fn() })
      const action = vi.fn()

      const props = createProps({
        uniqueValues: new Set(['Full-time', 'Part-time']),
        action
      })

      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(action).toHaveBeenCalledWith(['Full-time'])
    })

    it('navigates user to job results page to see a new batch of filtered results', async () => {
      const push = vi.fn()
      useRouteMock.mockReturnValue({ push })

      const props = createProps({
        uniqueValues: new Set(['Full-time'])
      })

      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })

  describe('when user clears job filters', () => {
    it('unchecks any checked checkboxes', async () => {
      useRouteMock.mockReturnValue({ push: vi.fn() })

      const props = createProps({
        uniqueValues: new Set(['Full-time'])
      })

      const { userStore } = renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckboxBeforeAction = screen.getByRole<HTMLInputElement>('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckboxBeforeAction)

      expect(fullTimeCheckboxBeforeAction.checked).toBe(true)

      userStore.CLEAR_USER_JOB_FILTER_SELECTIONS()

      const fullTimeCheckboxAfterAction = await screen.findByRole<HTMLInputElement>('checkbox', {
        name: /full-time/i
      })

      expect(fullTimeCheckboxAfterAction.checked).toBe(false)
    })
  })
})
