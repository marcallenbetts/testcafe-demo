import homePage from '../pages/home-page'
import config from '../config'

fixture`Home page`.page(config.baseUrl)

test('Page title', async t => {
  await t.expect(homePage.pageTitle.textContent).eql('The Internet')
})

test('Page heading', async t => {
  await t.expect(homePage.heading.textContent).eql('Welcome to the-internet')
})

test('Page subheading', async t => {
  await t.expect(homePage.subheading.textContent).eql('Available Examples')
})

test('Footer text', async t => {
  await t
    .expect(homePage.footer.textContent)
    .contains('Powered by Elemental Selenium')
})

test('Footer link', async t => {
  await t
    .expect(homePage.footerLink.getAttribute('href'))
    .eql('http://elementalselenium.com/')
})
