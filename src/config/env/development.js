class Config {
  constructor () {
    this.env = 'development'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = 'localhost'
    this.DATABASE = 'school_dev'
    this.DATABASE_USERNAME = 'postgres'
    this.DATABASE_PASSWORD = ''
  }
}

module.exports = new Config()
