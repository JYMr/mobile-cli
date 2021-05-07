
const isProduct = process.env.NODE_ENV === 'production'
const cdnConfig = {
  js: [
    'https://cdn.bootcdn.net/ajax/libs/vue/3.0.0/vue.runtime.global.prod.js',
    'https://cdn.bootcdn.net/ajax/libs/vant/3.0.13/vant.min.js'
  ],
  css: [
    'https://cdn.bootcdn.net/ajax/libs/vant/3.0.13/index.min.css'
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
  configureWebpack: config => {
    if (isProduct) {
      config.externals = {
        vant: 'vant',
        vue: 'Vue'
      }
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
