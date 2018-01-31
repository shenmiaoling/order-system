const express = require('express')
const nunjucks = require('nunjucks')
const {pathExistsSync} = require('fs-extra')

const server = express()

nunjucks.configure('.', {
  autoescape: true,
  express: server
})

const locals = require('./package.json')

if (pathExistsSync('./assets/webpack-assets.json')) {
  Object.assign(locals, {
    names: '加载中...'
  },require('./assets/webpack-assets'))
}

server.use('/assets', express.static('assets'))

server.get('*', (request,response) => {
  response.render('index.njk', Object.assign({}, locals))
})

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log("* Use Ctrl-C to stop")
})
