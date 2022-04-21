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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
