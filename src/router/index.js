import { createRouter, createWebHistory } from 'vue-router'
// Home Components
import HomeIndex from '../components/Home/index.vue';

const routes = [
  { path: '/', component: HomeIndex, name: 'Home' },
  { path: '/movies', component: () => import('../components/Movies/index.vue'), name: 'MoviesIndex' },
  { path: '/movies/:id', component: () => import('../components/Movies/show.vue'), name: 'MoviesShow', props: true },
  { path: '/best-movies', component: () => import('../components/Movies/bestMovies.vue'), name: 'BestMovies', props: true },
  { path: '/rating', component: () => import('../components/Rating/index.vue'), name: 'Rating', props: true },
  { path: '/users/:id', component: () => import('../components/Users/user.vue'), name: 'Users', props: true },
  { path: '/users/:id/recommendation', component: () => import('../components/Users/recommendation.vue'), name: 'Rec', props: true },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
