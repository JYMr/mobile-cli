// 微信状态码
export enum WechatStatus{
  PAY_STATUS_OK = 'get_brand_wcpay_request:ok', // 支付成功
  PAY_STATUS_CANCEL = 'get_brand_wcpay_request:cancel', // 支付过程中用户取消
  PAY_STATUS_FAIL = 'get_brand_wcpay_request:fail' // 支付失败
}
