import { Selector } from 'testcafe'

class HomePage {
  constructor() {
    this.pageTitle = Selector('title')
    this.heading = Selector('h1')
    this.subheading = Selector('h2')

    this.formAuthenticationLink = Selector('a[href="/login"]')
    this.entryAdLink = Selector('a[href="/entry_ad"]')
    this.statusCodesLink = Selector('a[href="/status_codes"]')

    this.footer = Selector('#page-footer')
    this.footerLink = Selector('#page-footer a')
  }
}

export default new HomePage()
