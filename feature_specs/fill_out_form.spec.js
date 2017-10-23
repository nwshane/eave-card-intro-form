const puppeteer = require('puppeteer')

describe('User on form page', () => {
  test('can fill out form and see results', async function () {
    const exampleName = 'Mickey Mouse'
    const browser = await puppeteer.launch()
    try {
      const page = await browser.newPage()
      await page.goto('http://localhost:3000')

      await page.type('#name_input', exampleName)
      await page.click('.js-next-page-button')

      const textContent = await page.evaluate(
        () => document.querySelector('.js-form-results').textContent
      )

      expect(textContent).toEqual(`Hi ${exampleName}!`)
    } finally {
      browser.close()
    }
  })
})
