const puppeteer = require('puppeteer')

describe('User on form page', () => {
  test('can fill out form and see results', async function () {
    const exampleName1 = 'Mickey Mouse'
    const examplePhoneNumber1 = '1232343456'

    const exampleNameChange = 'A'
    const examplePhoneNumberChange= '7'

    const exampleName2 = exampleNameChange + exampleName1
    const examplePhoneNumber2 = examplePhoneNumberChange + examplePhoneNumber1 

    const browser = await puppeteer.launch()
    try {
      const page = await browser.newPage()
      await page.goto('http://localhost:3000')

      await page.type('#name_input', exampleName1)
      await page.click('.js-next-page-button')

      await page.type('#phone_number_input', examplePhoneNumber1)
      await page.click('.js-next-page-button')

      expect(
        await page.evaluate(
          () => document.querySelector('.js-form-results').textContent
        )
      ).toEqual(
        `Hi ${exampleName1}! Your phone is ${examplePhoneNumber1}.`
      )

      await page.click('.js-previous-page-button')
      await page.click('.js-previous-page-button')

      await page.type('#name_input', exampleNameChange)
      await page.click('.js-next-page-button')

      await page.type('#phone_number_input', examplePhoneNumberChange)
      await page.click('.js-next-page-button')

      expect(
        await page.evaluate(
          () => document.querySelector('.js-form-results').textContent
        )
      ).toEqual(
        `Hi ${exampleName2}! Your phone is ${examplePhoneNumber2}.`
      )
    } finally {
      browser.close()
    }
  })
})
