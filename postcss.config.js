module.exports = {
  plugins: {
    // to edit target browsers: use 'browserslist' field in package.json
    autoprefixer: {},
    // 添加的代码
    'postcss-px2rem-exclude': {
      remUnit: 75,
      propList: ['*', '!border', ''],
      exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
    }
  }
}
