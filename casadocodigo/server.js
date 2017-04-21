const app = require('./custom-express')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

app.set('io', io)

let server = http.listen(port, () => {
  let host = server.address().address
  let port = server.address().port

  console.log(`Seu servidor está de pé em http://${host}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
