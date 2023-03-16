import { defineStore } from 'pinia'

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: []
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations) {
      this.selectedOrganizations = organizations
    }
  }
})
