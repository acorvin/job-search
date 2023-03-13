import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import MainNav from '@/components/Navigation/MainNav.vue'
import { useUserStore } from '@/stores/user'

// Disply company name
describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia()

    const $route = {
      name: 'Home'
    }
    render(MainNav, {
      global: {
        plugins: [pinia],
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
      const userStore = useUserStore()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: 'user profile image'
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
