const http = require('./custom-express')
const port = 3000

let server = http.listen(port, () => {
  console.log(`Seu servidor está de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
