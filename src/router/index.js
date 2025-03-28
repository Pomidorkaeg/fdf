import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TournamentTable from '../components/TournamentTable.vue'
import Matches from '../components/Matches.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tournament',
    name: 'Tournament',
    component: TournamentTable
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  }
]

const router = createRouter({
  history: createWebHistory('/fdf/'),
  routes
})

export default router 