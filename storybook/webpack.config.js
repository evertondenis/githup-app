'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')
const path = require('path')

module.exports = function ( config, env ) {
  const newConfig = webpackConfig(config, env);

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat([
    {
      test: /\.js$/,
      loader: 'standard',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../src')
    }
  ])

  return newConfig
}
