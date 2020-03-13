class Config {
  constructor() {
    this.baseUrl = process.env.BASEURL
      ? process.env.BASEURL
      : 'https://the-internet.herokuapp.com'
    this.username = 'tomsmith'
    this.password = 'SuperSecretPassword!'
  }
}

export default new Config()
