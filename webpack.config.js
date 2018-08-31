const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  // mode の指定
  mode: "development",//development、production
  // エントリーポイント 複数指定可能
  entry: `${__dirname}/src/js/index.js`,
  //　出力ファイルに関して
  output: {
    path: `${__dirname}/build/`,
    filename: 'asset/js/bundle.js'
  },
  module: {
    rules: [
      {
        // load対象ファイル
        test: /\.js$/,
        exclude: /node_modules/,
        // loaderの設定
        use: [{loader:'babel-loader'}]
      },
      {
        test: /\.html$/,
        use:'html-loader'
      },
      {
        test: /\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: `${__dirname}/public/index.html`})
  ],
  resolve: {
    extensions: ['.js', '.vue'],
  }
}