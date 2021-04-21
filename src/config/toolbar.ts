/*
* TOOLBAR
* */

import home from '@/assets/images/icon/icon-home.svg'
import user from '@/assets/images/icon/icon-user.svg'
import { toolBarConfig } from '@/cli-config'

const toolbar: toolBarConfig = {
  // 是否显示icon
  isIcon: true,
  // bottom  top
  position: 'bottom',
  data: [
    {
      name: '首页',
      path: '/',
      icon: home,
      key: Symbol('TOOLBAR')
    },
    {
      name: '我的',
      path: '/mine',
      icon: user,
      key: Symbol('TOOLBAR')
    }
  ]
}

export default toolbar
