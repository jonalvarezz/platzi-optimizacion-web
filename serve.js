const url = require('url')
const handler = require('serve-handler')
const ssrHome = require('./ssr')

module.exports = async (request, response) => {
  const { pathname } = url.parse(request.url)

  // Everything that's not the root path, it's a static file
  // Let serve-handler take care of it
  if (pathname !== '/') {
    return await handler(request, response)
  }

  return await ssrHome(request, response)
}
