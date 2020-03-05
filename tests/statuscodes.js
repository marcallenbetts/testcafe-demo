import { RequestLogger } from 'testcafe'
import homePage from '../pages/home-page'
import statuscodesPage from '../pages/statuscodes-page'
import * as _ from 'lodash'
import config from '../config'

const url = config.baseUrl
const logger = RequestLogger(new RegExp(url))

fixture`Status codes page`.page(url)

test('Page title', async t => {
  await t
    .click(homePage.statusCodesLink)
    .expect(homePage.pageTitle.textContent)
    .eql('The Internet')
})

test('Page heading', async t => {
  await t
    .click(homePage.statusCodesLink)
    .expect(statuscodesPage.heading.textContent)
    .eql('Status Codes')
})

test.requestHooks(logger)('200 link', async t => {
  await t.click(homePage.statusCodesLink).click(statuscodesPage.twoHundredLink)
  const log = _.last(logger.requests)
  await t.expect(log.response.statusCode).eql(200)
})

test.requestHooks(logger)('301 link', async t => {
  await t
    .click(homePage.statusCodesLink)
    .click(statuscodesPage.threeZeroOneLink)

  const log = _.last(logger.requests)
  await t.expect(log.response.statusCode).eql(301)
})

test.requestHooks(logger)('404 link', async t => {
  await t
    .click(homePage.statusCodesLink)
    .click(statuscodesPage.fourZeroFourLink)

  const log = _.last(logger.requests)
  await t.expect(log.response.statusCode).eql(404)
})

test.requestHooks(logger)('500 link', async t => {
  await t.click(homePage.statusCodesLink).click(statuscodesPage.fiveHundredLink)

  const log = _.last(logger.requests)
  await t.expect(log.response.statusCode).eql(500)
})

test('Footer text', async t => {
  await t
    .click(homePage.statusCodesLink)
    .expect(statuscodesPage.footer.textContent)
    .contains('Powered by Elemental Selenium')
})

test('Footer link', async t => {
  await t
    .click(homePage.statusCodesLink)
    .expect(statuscodesPage.footerLink.getAttribute('href'))
    .eql('http://elementalselenium.com/')
})
