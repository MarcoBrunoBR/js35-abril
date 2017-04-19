const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')

module.exports = function (app) {
  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
  })

  app.get('/produtos', (req, res, next) => {
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.lista((err, result, fields) => {
      res.render('produtos/lista', { livros: result })
    })

    connection.end()
  })











  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
