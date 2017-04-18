'use strict'

var http = require('http')
const port = 3000
const nomes = ['Wagner', 'Anderson', 'Estevão', 'Thiago', 'Adalberto', 'Paulo']

let app = http.createServer(function (req, res) {
  var msg = ''
  if(req.url == '/') {

    res.end('Home' + req.method)
  }

  for(let i = 0; i < nomes.length; i++) {
    msg += ` ${nomes[i]} | `
  }

  if (req.url == '/nomes') {
    res.writeHead(200,{'Content-type': 'text/html'})
    res.end(`<meta charset="utf-8">${msg}`)
  }
})

app.listen(port, '127.0.0.1')

console.log(`Servidor rodando em http://localhost:${port}`)
console.log('Para derrubar o servidor: ctrl + c')
