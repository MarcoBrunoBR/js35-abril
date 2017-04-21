const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')

class ProdutosController {
  listaLivros(req, res, next) {
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.lista((err, result, fields) => {
      res.format({
        html: () => {
          res.rende('produtos/lista', { livros: result })
        },
        json: () => {
          res.json(result)
        }
      })
    })

    connection.end()
  }

  salva(req, res, next) {
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
  }

  show(req, res, next) {
    res.render('produtos/form')
  }
}

module.exports = new ProdutosController()
