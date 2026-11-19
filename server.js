const http = require('node:http')
const { handler } = require('./app')
const port = Number(process.env.PORT || 8080)
http.createServer(handler).listen(port, () => console.log(`ouvindo na porta ${port}`))
