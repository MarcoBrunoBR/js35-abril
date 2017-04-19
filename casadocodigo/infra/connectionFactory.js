const mysql = require('mysql')

module.exports = () => {
  let connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
  })

  return connection
}
