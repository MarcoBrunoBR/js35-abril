const ProdutosController = require('../controllers/ProdutosController')
const IndexController = require('../controllers/IndexController')
const Logger = require('../infra/Logger')
const logger = new Logger()

module.exports = function (app) {
  const controller = new ProdutosController(app)

  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', IndexController.show)

  app.get('/produtos/', controller.listaLivros)

  app.post('/produtos', controller.salva)

  app.get('/produtos/form', controller.show)

  app.post('/promocoes', (req, res) => controller.enviaPromocoes(req, res))

  app.get('/promocoes',  controller.showPromocoes)

  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
