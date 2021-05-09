const express = require("express")
const server = express()
const routes = require("./routes")

//usando template engine
server.set('view engine', 'ejs')

//habilitar arquivos statics da pasta public
server.use(express.static("public"))

// habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

//setado config para o server utilizar routes
server.use(routes)

server.listen(3000, () => console.log('servidor rodando'))

