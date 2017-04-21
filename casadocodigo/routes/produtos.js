const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')
const ProdutosController = require('../controllers/ProdutosController')
const IndexController = require('../controllers/IndexController')

module.exports = function (app) {
  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', IndexController.show)

  app.get('/produtos/', ProdutosController.listaLivros)

  app.post('/produtos', ProdutosController.salva)

  app.get('/produtos/form', ProdutosController.show)

  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
