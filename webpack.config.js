'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    },
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(s)?css$/,
        use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin('./src/scss/main.scss'),
    new HtmlPlugin({
      title: 'Github APP',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}
