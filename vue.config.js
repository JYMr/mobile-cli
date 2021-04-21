
module.exports = {
  // configureWebpack: config => {
  //   // TODO: CND配置
  // },
  css: {
    // TODO: 公共样式引入
    loaderOptions: {
      sass: {
        // 引入scss全局变量
        prependData: '@import "@/assets/scss/variables.scss";'
      }
    }
  }
}
