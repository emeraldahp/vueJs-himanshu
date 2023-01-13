import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestingDev from '../components/TestingDev.vue'
import LoginSend from '../components/LoginSend.vue'
import AboutYou from '../components/AboutYou.vue'
import ProductTable from'../components/ProductTable.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: TestingDev
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSend
    },
    {
      path: '/aboutyou',
      name: 'aboutyou',
      component: AboutYou,
      props: true
      
    },
    {
      path: '/products',
      name: 'products',
      component: ProductTable,
      props:true
      
    }
    
  ]
})

export default router
