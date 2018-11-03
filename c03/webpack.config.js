const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        // TODO: 开启下面这行代码的注释，并注释掉上面一行代码，即可在开发者工具中定位到 css 源码
        // use: [ 'style-loader', 'css-loader?sourceMap' ]
      }
    ]
  }
  // 开启下面这行代码的注释，即可在开发者工具中定位到 js 源码
  // ,devtool: 'sourcemap'
}