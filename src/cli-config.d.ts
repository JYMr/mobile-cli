
export interface toolBarConfig {
    isIcon: boolean;
    position: string;
    data: Array<baseToolBar>
  }

export interface baseToolBar {
    name?: string;
    path?:string;
    icon?: any;
    key: symbol;
  }
