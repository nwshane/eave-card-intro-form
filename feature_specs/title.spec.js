const puppeteer = require('puppeteer')

describe('Home Page', () => {
  test('Has correct title', async function () {
    const browser = await puppeteer.launch()
    try {
      const page = await browser.newPage()
      await page.goto('http://localhost:3000')
      expect(await page.title()).toEqual('Three Card Flow')
    } finally {
      browser.close()
    }
  })
})
