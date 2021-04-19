import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layout/layout.vue'

interface RouteMeta {
  layoutMode:?string;
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
        component: () => import('@/views/Index.vue'),
        meta: {
          layoutMode: 'toolbar'
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
