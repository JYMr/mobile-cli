
declare interface baseToolBar {
  name?: string
  path?:string
  icon?: any
  key: symbol
}

declare interface toolBarConfig {
  isIcon: boolean
  position: string
  data: Array<baseToolBar>
}
