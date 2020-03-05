import { Selector } from 'testcafe'

class LoginPage {
  constructor() {
    this.pageTitle = Selector('title')
    this.heading = Selector('h2')
    this.errorMessage = Selector('#flash')
    this.usernameInput = Selector('#username')
    this.passwordInput = Selector('#password')
    this.loginButton = Selector('button')
    this.footer = Selector('#page-footer')
    this.footerLink = Selector('#page-footer a')
  }
}

export default new LoginPage()
