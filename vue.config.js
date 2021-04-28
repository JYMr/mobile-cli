
const isProduct = process.env.NODE_ENV === 'production'
const cdnConfig = {
  js: [
    'https://cdn.bootcdn.net/ajax/libs/vue/3.0.0/vue.runtime.global.prod.js'
  ]
}

module.exports = {
  chainWebpack: config => {
    if (isProduct) {
      config.plugin('html').tap(arg => {
        arg[0].cdn = cdnConfig
        return arg
      })
    }
  },
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
