import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'

import MainNav from '@/components/Navigation/MainNav.vue'

// Disply company name
describe('MainNav', () => {
  const renderMainNav = () => {
    const $route = {
      name: 'Home'
    }
    render(MainNav, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('CorvinCareers')
    expect(companyName).toBeInTheDocument()
  })
  // loginUser
  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: 'user profile image'
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
