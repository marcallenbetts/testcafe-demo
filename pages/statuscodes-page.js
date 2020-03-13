import { Selector } from 'testcafe'

class StatusCodesPage {
  constructor() {
    this.pageTitle = Selector('title')
    this.heading = Selector('h3')

    this.twoHundredLink = Selector('a[href="status_codes/200"]')
    this.threeZeroOneLink = Selector('a[href="status_codes/301"]')
    this.fourZeroFourLink = Selector('a[href="status_codes/404"]')
    this.fiveHundredLink = Selector('a[href="status_codes/500"]')

    this.footer = Selector('#page-footer')
    this.footerLink = Selector('#page-footer a')
  }
}

export default new StatusCodesPage()
