
class Config {
  constructor () {
    this.env = 'production'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = 'salt.db.elephantsql.com'
    this.DATABASE_PORT = process.env.DATABASE_PORT || 5432
    this.DATABASE = 'jezqpthi'
    this.DATABASE_USERNAME = 'jezqpthi'
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
    this.JWT_SECRET = 'HZADgA9ttB$S!dy!hu3Rauvg!L27'
    this.COOKIE_SECURE = true
    this.PUBLIC_ROUTES = ['/', '/api/users', '/api/auth/login']
    this.CLIENT_URL = 'https://frontend-ifpi-course.netlify.app'
  }
}

module.exports = new Config()
