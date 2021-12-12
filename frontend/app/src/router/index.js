import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: () => import('../pages/SignIn.vue'),
    children: [
        { path: '', component: () => import('../components/Login.vue')}
    ]
  },
  {
    path: '/clinics',
    name: 'Clinics',
    component: () => import('../pages/Clinics.vue'),
    children: [
        { path: '', component: () => import('../components/Timeline.vue')}
    ]
  },
  {
    path: '/low-stock',
    name: 'lowStock',
    component: () => import('../pages/Stock.vue'),
    children: [
        { path: '', component: () => import('../components/LowStock.vue')}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
