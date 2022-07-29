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
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/home/components/home-main')
      },
      {
        path: 'manage-base-info/warehouse',
        component: () => import('@/views/manage-base-info/warehouse')
      },
      {
        path: 'manage-base-info/warehouse/details',
        component: () => import('@/views/manage-base-info/components/details')
      },
      {
        path: 'manage-base-info/warehouse/revise-details',
        component: () =>
          import('@/views/manage-base-info/components/revise-details')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
