import { RequestMock } from 'testcafe'
import config from '../config'
import homePage from '../pages/home-page'
import entryadPage from '../pages/entryad-page'

const requestRegExp = new RegExp('/entry_ad')
const mockedResponse = {
  response: 'this is a mocked response'
}
const mock = RequestMock()
  .onRequestTo({ url: requestRegExp, method: 'POST' })
  .respond(mockedResponse, 200)

fixture`Mocked Response`.page(config.baseUrl).requestHooks(mock)

test('Mocked response', async t => {
  await t.click(homePage.entryAdLink).click(entryadPage.modalButton)
})
