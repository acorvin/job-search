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

  it('stores user search term for skills and qualifications', () => {
    const store = useUserStore()
    expect(store.skillsSearchTerm).toBe('')
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('LOGIN_USER', () => {
    it('logs user in', () => {
      const store = useUserStore()
      store.LOGIN_USER()
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

  describe('UPDATE_SKILLS_SEARCH_TERM', () => {
    it('receives search term for skills user has entered', () => {
      const store = useUserStore()
      store.skillsSearchTerm = ''
      store.UPDATE_SKILLS_SEARCH_TERM('Vue')

      expect(store.skillsSearchTerm).toBe('Vue')
    })
  })

  describe('clear user job filters selections', () => {
    it('removes all job filters user has chosen', () => {
      const store = useUserStore()
      store.selectedDegrees = ['Random degree']
      store.selectedJobTypes = ['Randon job type']
      store.selectedOrganizations = ['Random organization']
      store.skillsSearchTerm = 'Vue Developer'

      store.CLEAR_USER_JOB_FILTER_SELECTIONS()

      expect(store.selectedDegrees).toEqual([])
      expect(store.selectedJobTypes).toEqual([])
      expect(store.selectedOrganizations).toEqual([])
      expect(store.skillsSearchTerm).toBe('')
    })
  })
})
