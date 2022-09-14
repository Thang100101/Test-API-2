const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const mid = jsonServer.defaults();
const port = process.env.PORT || 3000

server.use(router)
server.use(mid)

server.listen(port)