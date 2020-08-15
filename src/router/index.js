import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '前台首頁',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id',
        name: '產品頁面',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/frontend/Cart.vue')
      }
    ]
  },
  // 巢狀路由
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
