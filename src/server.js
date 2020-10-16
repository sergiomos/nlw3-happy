// importar dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//iniciando o express
const server = express()
server
    //UTILIZAR BODY DO REQ
    .use(express.urlencoded({ extended: true }))
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar teamplate engfine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)

