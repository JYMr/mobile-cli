
export interface toolBarConfig {
  isIcon: boolean;
  position: string;
  data: Array<{
    name?: string;
    path?:string;
    icon?: any;
    key: symbol;
  }>
}
