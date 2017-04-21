const app = require('./custom-express')
const port = 3000

app.listen(port, () => {
  console.log(`Seu servidor está de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
