module.exports = function (app) {
  app.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  app.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
  })

  app.get('/produtos', (req, res, next) => {
    res.render('produtos/lista')
  })

  app.use((req, res, next) => {
    res.render('404')
    console.log('404')
  })
}
