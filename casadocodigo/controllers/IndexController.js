class IndexController {
  show(req, res, next) {
    res.render('index')
  }
}

module.exports = new IndexController()
