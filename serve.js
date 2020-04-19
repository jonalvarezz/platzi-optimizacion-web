const handler = require('serve-handler')
const http = require('http')
const url = require('url')
const homeHandler = require('./ssr/home')

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url)

  switch (pathname) {
    case '/':
      return homeHandler(request, response)
    default:
      return handler(request, response)
  }
})

server.listen(5000, () => {
  console.log('PlatziVideo running at http://localhost:3000')
})
