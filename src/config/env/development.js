class Config {
  constructor () {
    this.env = 'development'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = 'localhost'
    this.DATABASE_PORT = process.env.DATABASE_PORT || 5432
    this.DATABASE = 'school_dev'
    this.DATABASE_USERNAME = 'postgres'
    this.DATABASE_PASSWORD = ''
    this.JWT_SECRET = 'HZADgA9ttB$S!dy!hu3Rauvg!L27'
    this.COOKIE_SECURE = false
    this.PUBLIC_ROUTES = ['/', '/api/auth/signup', '/api/auth/signin']
    this.CLIENT_URL = '*'
  }
}

module.exports = new Config()
