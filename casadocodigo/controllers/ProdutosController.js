const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../infra/ProdutoDao')

class ProdutosController {
  listarLivros(req, res, next) {
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.lista((err, result, fields) => {
      res.format({
        html: () => {
          res.render('produtos/lista', { livros: result })
        },
        json: () => {
          res.json(result)
        }
      })
    })

    connection.end()
  }
}

module.exports = new ProdutosController()
