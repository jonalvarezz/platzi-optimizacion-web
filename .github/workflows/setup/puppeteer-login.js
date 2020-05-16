/**
 * Login to our app
 *
 * Usa nuestra formulario login y espera
 * hasta que un carousel item salvaje aparezca
 * <excited-pikachu.gif>
 *
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
async function login(browser, context) {
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/login')
  await page.type('input[type="email"]', 'mira@que.com')
  await page.type('input[type="password"]', 'bello')
  await page.click('button')
  page.setCacheEnabled(false)
  await page.waitForSelector('.carousel-item')
}

module.exports = login
