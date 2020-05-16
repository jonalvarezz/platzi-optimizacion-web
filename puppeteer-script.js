/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/login')
  await page.type('input[type="email"]', 'hola@parola.com')
  await page.type('input[type="password"]', 'parola')
  await page.click('button')
  await page.waitForNavigation()
}
