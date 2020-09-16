const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
const session = require('./config/session')

const server = express()

server.use(session)
server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', '.njk')

nunjucks.configure('src/app/views',{
    express: server,
    autoescape: true,
    noCache: true
})

server.listen(4000,()=>{
    console.log('Servidor rodando na porta 3000')
})