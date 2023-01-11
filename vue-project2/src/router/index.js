import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AxiosGet from '../components/AxiosGet.vue'
import AxiosPost from '../components/AxiosPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/axiosget',
      name: 'axiosget',
      component: AxiosGet
    },
    {
      path: '/axiospost',
      name: 'axiospost',
      component: AxiosPost
    }

  ]
})

export default router
