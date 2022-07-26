import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/home'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/home/components/home-main')
      },
      {
        path: 'manage-base-info',
        component: () => import('@/views/manage-base-info')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
