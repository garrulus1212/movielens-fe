import { createRouter, createWebHistory } from 'vue-router'
// Home Components
import HomeIndex from '../components/Home/index.vue';

const routes = [
  { path: '/', component: HomeIndex, name: 'Home' },
  { path: '/movies', component: () => import('../components/Movies/index.vue'), name: 'MoviesIndex' },
  { path: '/movies/:id', component: () => import('../components/Movies/show.vue'), name: 'MoviesShow', props: true },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
