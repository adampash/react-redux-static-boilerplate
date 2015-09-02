// Common webpack configuration used by webpack.hot.config and webpack.rails.config.

const path = require('path');

module.exports = {
  // turn to false if not on home network
  home: true,

  // the project dir
  context: __dirname,
  entry: [
    './src/app.jsx',
    './src/stylesheets/app.scss'
  ],

  resolve: {
    root: [path.join(__dirname, 'src'),
           path.join(__dirname, 'src/'),
           path.join(__dirname, 'src/stylesheets')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js', '.cjsx', '.coffee'],
  },
  module: {
    loaders: []
  }
};
