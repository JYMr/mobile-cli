/*
* TOOLBAR
* */

import { toolBarConfig } from '@/cli-custom'

const toolbar: toolBarConfig = {
  // 是否显示icon
  isIcon: true,
  // bottom  top
  position: 'bottom',
  data: [
    {
      name: '首页',
      path: '/',
      icon: require('@/assets/images/icon/icon-home.svg'),
      key: Symbol('TOOLBAR')
    },
    {
      name: '我的',
      path: '/mine',
      icon: require('@/assets/images/icon/icon-user.svg'),
      key: Symbol('TOOLBAR')
    },
    {
      name: '我的',
      path: '/mine',
      icon: require('@/assets/images/icon/icon-home.svg'),
      key: Symbol('TOOLBAR')
    }
  ]
}

export default toolbar
