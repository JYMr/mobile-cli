import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layout/layout.vue'

interface RouteMeta {
  layoutMode: string | null;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine.vue'),
        meta: {
          title: '我的'
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/login.vue'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
