const path = require('path')
const config = require('./webpack.common.config')
const webpack = require('webpack')

const node_modules_dir = path.resolve(__dirname, 'node_modules')

config.output = {
  filename: 'bundle.js',
  path: './build'
}

config.module.loaders.push(
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer-loader!sass"
      },
      {
        test: /\.jsx?$/, loaders: ['babel'],
        exclude: [node_modules_dir],
        include: path.join(__dirname, 'src')
      }
)

config.plugins = [
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE (disable w/false)
  }),
]

module.exports = config
