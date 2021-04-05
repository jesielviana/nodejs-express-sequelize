class Config {
  constructor () {
    this.env = 'development'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE = 'school_dev'
  }
}

module.exports = new Config()
