const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
];

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'webpack-dev-server/client?',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.jsx'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins,
  devtool: 'cheap-module-source-map', // eval-source-map
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: false,
  },
  performance: {
    hints: false,
  },
});
