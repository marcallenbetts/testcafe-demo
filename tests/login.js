import config from '../config'
import homePage from '../pages/home-page'
import loginPage from '../pages/login-page'
import securePage from '../pages/secure-page'

fixture`Login page`.page(config.baseUrl)

test('Page title', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .expect(loginPage.pageTitle.textContent)
    .eql('The Internet')
})

test('Page heading', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .expect(loginPage.heading.textContent)
    .eql('Login Page')
})

test('Blank username and password', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .click(loginPage.loginButton)
    .expect(loginPage.errorMessage.textContent)
    .contains('Your username is invalid!')
})

test('Successful login', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .typeText(loginPage.usernameInput, config.username)
    .typeText(loginPage.passwordInput, config.password)
    .click(loginPage.loginButton)
    .expect(securePage.message.textContent)
    .contains('You logged into a secure area!')
})

test('Footer text', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .expect(loginPage.footer.textContent)
    .contains('Powered by Elemental Selenium')
})

test('Footer link', async t => {
  await t
    .click(homePage.formAuthenticationLink)
    .expect(loginPage.footerLink.getAttribute('href'))
    .eql('http://elementalselenium.com/')
})
