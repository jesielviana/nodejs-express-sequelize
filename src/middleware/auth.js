const jwt = require('jsonwebtoken')
const config = require('../config')

function verifyToken (req, res, next) {
  const token = req.cookies ? req.cookies.token : null // token in cookie
  // const token = req.headers.authorization
  console.log('token', token)
  if (!token) {
    return res.status(403).send({
      auth: false, message: 'No token provided.'
    })
  }

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Fail to Authentication. Error -> ' + err
      })
    }
    req.userId = decoded.id
    next()
  })
}

module.exports = verifyToken
