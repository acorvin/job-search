import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { useRoute } from 'vue-router'
vi.mock('vue-router')

import MainNav from '@/components/Navigation/MainNav.vue'
import { useUserStore } from '@/stores/user'

const useRouteMock = useRoute as Mock

// Disply company name
describe('MainNav', () => {
  const renderMainNav = () => {
    useRouteMock.mockReturnValue({ name: 'Home' })
    const pinia = createTestingPinia()

    render(MainNav, {
      global: {
        plugins: [pinia],
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
