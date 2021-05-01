import { ToolBarType } from '@/assets/constant/ToolBarType'
import layout from '@/layout/layout.vue'
import { RouteRecordRaw } from 'vue-router'
// import { DefineComponent } from "vue";

interface RouteMeta {
  title?: string
  layoutMode?: string | null
}

/**
 * 路由配置表
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页',
      layoutMode: ToolBarType.TOOLBAR
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine.vue'),
    meta: {
      title: '我的',
      layoutMode: ToolBarType.TOOLBAR
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
    meta: {
      title: '登录',
      layoutMode: ToolBarType.TOOLBAR
    }
  }
]

/**
 * 创建路由
 */
export const createRoute = (): Array<RouteRecordRaw> => {
  const toolbarRoute: RouteRecordRaw = {
    path: '/',
    name: 'Home',
    component: layout,
    children: []
  }

  const defaultRoute: Array<RouteRecordRaw> = []

  routes.forEach(item => {
    if (item.meta && item.meta.layoutMode === ToolBarType.TOOLBAR) {
      toolbarRoute.children && toolbarRoute.children.push(item)
    } else {
      defaultRoute.push(item)
    }
  })

  return [toolbarRoute, ...defaultRoute]
}

export default routes
