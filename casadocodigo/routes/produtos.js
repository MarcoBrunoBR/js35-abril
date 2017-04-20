const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')
const ProdutosController = require('../controllers/ProdutosController')

module.exports = function (app) {
  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
  })

  app.get('/produtos', ProdutosController.listarLivros)

  app.post('/produtos', (req, res, next) => {
    let livro = req.body
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let errs = false

    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    req.assert('preco', 'Preço deve ser um número').isFloat()
    errs = req.validationErrors()

    if (errs) {
      console.log('Há erros de validação!')

      res.format({
        html: () => {
          res.status(400).render('produtos/form', {validationErrors: errs})
        },
        json: () => {
          res.status(400).send(errs)
        }
      })
    } else {
      produtoDao.salva(livro, (err, result, fields) => {
        res.redirect('/produtos')
      })
    }
  })

  app.get('/produtos/form', (req, res, next) => {
    res.render('produtos/form')
  })

  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
