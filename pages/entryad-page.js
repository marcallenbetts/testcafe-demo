import { Selector } from 'testcafe'

class EntryAdPage {
  constructor() {
    this.pageTitle = Selector('title')
    this.heading = Selector('h1')
    this.subheading = Selector('h2')

    this.modalButton = Selector('div[class="modal-footer"]')

    this.footer = Selector('#page-footer')
    this.footerLink = Selector('#page-footer a')
  }
}

export default new EntryAdPage()
