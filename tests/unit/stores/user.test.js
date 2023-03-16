import { createPinia, setActivePinia } from 'pinia'

import { useUserStore } from '@/stores/user'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('keeps track of whether user is looged in', () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(false)
  })
})

describe('loginUser', () => {
  it('logs user in', () => {
    const store = useUserStore()
    store.loginUser()
    expect(store.isLoggedIn).toBe(true)
  })

  it('stores organizations the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations the user has filtered jobs by', () => {
      const store = useUserStore()
      store.ADD_SELECTED_ORGANIZATIONS(['Org1', 'Org2'])

      expect(store.selectedOrganizations).toEqual(['Org1', 'Org2'])
    })
  })
})
