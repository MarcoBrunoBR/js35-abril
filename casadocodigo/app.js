let express = require('express')
let app = express()
let port = 3000

app.set('view engine', 'ejs')

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

app.listen(port, () => {
  console.log(`Seu servidor está de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
