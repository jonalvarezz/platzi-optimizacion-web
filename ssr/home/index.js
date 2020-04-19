const { IncomingMessage, ServerResponse } = require('http')
const fs = require('fs')
const render = require('./render')

const PLACEHOLDER = '<div id="ssr-placeholder"></div>'

/**
 * Server Side Render the Home Page
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
async function process(request, response) {
  const homeFileBuffer = fs.readFileSync('./index.html')
  const htmlText = homeFileBuffer.toString()

  const content = await render()
  const htmlWithContent = htmlText.replace(PLACEHOLDER, content)

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  response.write(htmlWithContent)
  response.end()
}

module.exports = process
