class Config {
  constructor () {
    this.env = 'test'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE = 'school_test'
    this.DATABASE_USERNAME = 'postgres'
  }
}

module.exports = new Config()
