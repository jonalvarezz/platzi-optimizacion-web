/**
 * Login to our app
 *
 * Usa nuestra formulario login y espera
 * hasta que un item del carousel salvaje aparezca
 * <excited-pikachu.gif>
 *
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
async function login(browser, { url }) {
  const page = await browser.newPage()
  await page.goto(`${url}/login`)
  await page.type('input[type="email"]', 'mira@que.com')
  await page.type('input[type="password"]', 'bello')
  await page.click('button')
  await page.waitForSelector('.carousel-item')
}

module.exports = login
