const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      // process.env.NODE_ENV !== 'production' && {
      //   test: /\.(sc|sa|c)ss$/,
      //   use: ['style-loader'],
      // },
      // process.env.NODE_ENV === 'production' && {
      //   test: /\.(sc|sa|c)ss$/,
      //   use: [MiniCssExtractPlugin.loader],
      // },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              // config: {
              //   path: __dirname + '/postcss.config.js',
              // },
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  autoprefixer: {
                    flexbox: 'no-2009',
                    grid: true,
                  },
                  stage: 3,
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.css$/,
      //   loader: require.resolve('postcss-loader'),
      //   options: {
      //     ident: 'postcss',
      //     plugins: () => [
      //       require('postcss-preset-env')({
      //         autoprefixer: {
      //           flexbox: 'no-2009',
      //         },
      //         stage: 3,
      //       }),
      //     ],
      //   },
      // },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ].filter(Boolean),
  },

  plugins: options.plugins.concat([
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'development',
    // }),
    new webpack.DefinePlugin(JSON.stringify(process.env.NODE_ENV)),
  ]),

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    alias: {
      'react-spring$': 'react-spring/web.cjs',
      'react-spring/renderprops$': 'react-spring/renderprops.cjs',
    },
  },

  devtool: options.devtool,
  devServer: options.devServer || {},
  target: 'web',
  performance: false,
});
