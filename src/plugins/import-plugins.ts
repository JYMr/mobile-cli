import WechatUtil from '@/utils/wechat'

import 'lib-flexible'
import 'lodash'
import http from './http'
import {
  Form,
  Field,
  Button,
  Swipe,
  SwipeItem,
  Stepper,
  Cell,
  CellGroup,
  Checkbox,
  Badge,
  RadioGroup,
  Radio,
  Uploader,
  Tab,
  Tabs,
  Icon,
  Step,
  Steps,
  Overlay,
  List,
  DropdownMenu,
  DropdownItem,
  Empty
} from 'vant'

console.log(http)

export const wechatUtil = new WechatUtil({
  appId: process.env.WECHAR_APPID,
  redirectUri: window.location.host + '/auth'
})

export default {
  install(app:any) {
    // --- custom plugins
    app.use(wechatUtil)

    // --- vant
    app.use(Form)
    app.use(Field)
    app.use(Button)
    app.use(Swipe)
    app.use(SwipeItem)
    app.use(Stepper)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Checkbox)
    app.use(Badge)
    app.use(RadioGroup)
    app.use(Radio)
    app.use(Uploader)
    app.use(Uploader)
    app.use(Tab)
    app.use(Tabs)
    app.use(Icon)
    app.use(Step)
    app.use(Steps)
    app.use(Overlay)
    app.use(List)
    app.use(DropdownMenu)
    app.use(DropdownItem)
    app.use(Empty)
  }
}
