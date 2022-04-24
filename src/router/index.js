import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Front/HomeView.vue')
      },
      {
        path: 'Products',
        component: () => import('../views/Front/ProductsView.vue')
      },
      {
        path: 'Product/:id',
        component: () => import('../views/Front/ProductView.vue')
      },
      {
        path: 'Cart',
        component: () => import('../views/Front/CartView.vue')
      },
      {
        path: 'Order',
        component: () => import('../views/Front/OrderView.vue')
      },
      {
        path: 'Follow',
        component: () => import('../views/Front/FollowOrder.vue')
      },
      {
        path: 'Complete/:id',
        component: () => import('../views/Front/CompleteView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  next()
})

export default router
