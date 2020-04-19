const url = require('url')
const handler = require('serve-handler')
const homeHandler = require('./ssr/home')

module.exports = async (request, response) => {
  const { pathname } = url.parse(request.url)

  if (pathname !== '/') {
    return await handler(request, response)
  }

  return await homeHandler(request, response)
}
