const path = require('path');
const { HashedModuleIdsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  entry: [path.join(process.cwd(), 'src/index.jsx')],
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        // parallel: true,
        // cache: true,
        sourceMap: true,
      }),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      // maxInitialRequests: 10,
      // minSize: 0,
      // cacheGroups: {
      //   /* extract react and react-related libs to separate chunk */
      //   react: {
      //     test: /react/,
      //     name: 'react',
      //     chunks: 'all',
      //     enforce: true,
      //   },
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendor',
      //     priority: -10,
      //   },

      // },
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // new HashedModuleIdsPlugin({
    //   hashFunction: 'sha256',
    //   hashDigest: 'hex',
    //   hashDigestLength: 20,
    // }),
  ],
  // performance: {
  //   assetFilter: assetFilename =>
  //     !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  // },
});
