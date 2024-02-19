import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('@/views/CarListView.vue')
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import('@/views/CarDetailView.vue'),
      props: true,
      query: true
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FaqView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import('@/views/NotFoundView.vue')
      // redirect: { name: "about" },
  }  

    
  ]
})

export default router
