import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'

// Define some routes
// Each route should map to a component.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
