var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.config')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/test', function(req, res) {
  // console.log('rendering test')
  res.sendFile(path.join(__dirname, 'test/index.html'))
})

// serve art image
app.get('/test/art.*', function(req, res) {
  var filetype = req.params['0']
  res.sendFile(path.join(__dirname, 'test/art.' + filetype))
})

app.get('*', function(req, res) {
  // console.log('rendering index')
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
