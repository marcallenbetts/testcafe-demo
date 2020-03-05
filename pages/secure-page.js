import { Selector } from 'testcafe'

class SecurePage {
  constructor() {
    this.message = Selector('#flash')
  }
}

export default new SecurePage()
