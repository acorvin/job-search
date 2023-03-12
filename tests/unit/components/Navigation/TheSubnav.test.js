import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: { name: routeName }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      },
      data() {
        return {
          onJobResultsPage: true
        }
      }
    })
  }
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults'

      renderTheSubnav(routeName)

      const jobCount = screen.getByText('1653')
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does NOT display job count', () => {
      const routeName = 'Home'

      renderTheSubnav(routeName)

      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
