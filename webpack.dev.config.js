// Run like this:
// cd client && node server.js

const path = require('path')
const config = require('./webpack.common.config')
const webpack = require('webpack')

if (config.home) {
  url = "http://0.0.0.0"
}

config.entry.push('webpack-hot-middleware/client')
config.output = {

  // this file is served directly by webpack
  filename: 'bundle.js',
  path: __dirname,
  publicPath: '/'
}
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE (disable w/false)
  }),
]
config.devtool = 'eval-source-map'

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
      {
        test: /\.scss$/,
        loader: "style!css?sourceMap!autoprefixer-loader!sass"
      },
      {
        test: /\.jsx?$/, loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }
)

module.exports = config
