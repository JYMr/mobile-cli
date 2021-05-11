import axiosInstance, { HttpController, httpMode } from '@/plugins/http'

class CommonApi extends HttpController {
  @httpMode('auth')
  testApi():void {
    return this.http.get('x')
  }
}

export default new CommonApi(axiosInstance)
