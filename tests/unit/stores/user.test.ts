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

  it('stores organizations that the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])
  })

  it('stores job types the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedJobTypes).toEqual([])
  })

  it('stores degrees user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedDegrees).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('loginUser', () => {
    it('logs user in', () => {
      const store = useUserStore()
      store.loginUser()
      expect(store.isLoggedIn).toBe(true)
    })

    describe('ADD_SELECTED_ORGANIZATIONS', () => {
      it('updates organizations the user has filtered jobs by', () => {
        const store = useUserStore()
        store.ADD_SELECTED_ORGANIZATIONS(['Org1', 'Org2'])

        expect(store.selectedOrganizations).toEqual(['Org1', 'Org2'])
      })
    })
    describe('ADD_SELECTED_JOB_TYPES', () => {
      it('updates job types the user has chosen to filter jobs by', () => {
        const store = useUserStore()
        store.ADD_SELECTED_JOB_TYPES(['Full-time', 'Part-time'])
        expect(store.selectedJobTypes).toEqual(['Full-time', 'Part-time'])
      })
    })
  })

  describe('ADD_SELECTED_DEGREES', () => {
    it('updates degrees the user has chosen to filter jobs by', () => {
      const store = useUserStore()
      store.ADD_SELECTED_DEGREES(["Bachelor's", "Master's"])

      expect(store.selectedDegrees).toEqual(["Bachelor's", "Master's"])
    })
  })
})
