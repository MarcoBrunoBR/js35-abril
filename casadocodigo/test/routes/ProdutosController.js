const express = require('../../custom-express')
const request = require('supertest')
const expect = require('expect')
const ProdutosController = require('../../controllers/ProdutosController')

describe('#ProdutosController', () => {
  it('Quero que liste um json com todos os livros', (done) => {
    request(express).get('/produtos')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200, done)
  })
  it('Quero que o retorna seja um HTML com todos os livros', (done) => {
    request(express).get('/produtos')
           .set('Accept', 'text/html')
           .expect('Content-Type', /html/)
           .expect(200, done)
  })
  it('Cadastrando uma promoções por socket.io', (done) => {
    request(express).post('/promocoes')
                    .send({msg: 'Texto'})
                    .expect(302, 302)
    done()
  })
})
