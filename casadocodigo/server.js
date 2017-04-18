const app = require('./app.js')
const port = 3000

require('./routes/route')(app)

app.listen(port, () => {
  console.log(`Seu servidor está de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
