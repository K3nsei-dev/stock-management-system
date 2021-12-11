const routes = [
    {
      path: '/',
      component: () => import('../pages/SignIn.vue')
    },
    {
        path: '/clinics',
        component: () => import('../pages/Clinics.vue')
    },
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('../pages/Error404.vue')
    }
  ]
  
  export default routes