const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const fromPairs = require('lodash/fromPairs')
const AssetsPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function getEnv() {
  return process.env.NODE_ENV || 'development'
}

function ifDev(resolve,reject) {
  return getEnv() === 'development' ?
  resolve: reject
}

module.exports = {
  entry: {
    index: '.',
    packages: [
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: ifDev('application.js','application-[hash].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(.woff2?|eot|ttf)$/,
        loader: 'url-loader?limit=1024'
      }
    ]
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, 'assets')
    }),
    new ExtractTextPlugin({
      filename: ifDev('application.css', 'application-[hash].css')
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'packages',
      filename: ifDev('packages.js','packages-[hash].js')
    })
  ].concat(ifDev([], [
    new webpack.optimize.UglifyJsPlugin()
  ])),
  resolve: {
    extensions: ['.js','.vue','.css','.styl','.json']
  }
}
