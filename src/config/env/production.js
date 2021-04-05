
class Config {
  constructor () {
    this.env = 'production'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE = 'school'
  }
}

module.exports = new Config()
