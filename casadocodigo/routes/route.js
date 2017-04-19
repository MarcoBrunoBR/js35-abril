const mysql = require('mysql')

module.exports = function (app) {
  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
  })

  app.get('/produtos', (req, res, next) => {
    let connection = mysql.createConnection({
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_DATABASE || 'casadocodigo'
    })

    connection.query('SELECT * FROM livros', (err, result, fields) => {
      res.render('produtos/lista', { livros: result })
    })

  })











  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
