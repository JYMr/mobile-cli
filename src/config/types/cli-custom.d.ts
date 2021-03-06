
export interface baseToolBar {
  name?: string
  path?:string
  icon?: any
  key: symbol
}

export interface toolBarConfig {
  isIcon: boolean
  position: string
  data: Array<baseToolBar>
}
