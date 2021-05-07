/*
* TOOLBAR
* */
import indexIcon from '@/assets/images/icon/icon-home.svg'
import userIcon from '@/assets/images/icon/icon-user.svg'

import { toolBarConfig } from '@/config/types/cli-custom'

const toolbar: toolBarConfig = {
  // 是否显示icon
  isIcon: true,
  // bottom  top
  position: 'bottom',
  data: [
    {
      name: '首页',
      path: '/',
      icon: indexIcon,
      key: Symbol('TOOLBAR')
    },
    {
      name: '我的',
      path: '/mine',
      icon: userIcon,
      key: Symbol('TOOLBAR')
    },
    {
      name: '我的',
      path: '/mine',
      icon: userIcon,
      key: Symbol('TOOLBAR')
    }
  ]
}

export default toolbar
