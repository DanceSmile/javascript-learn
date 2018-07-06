const server = require('./server')
const router = require("./router")
const fs = require("fs")

const handle = {}
handle["/"] = function (ctx) {

  ctx.response.write("index handle")

}
handle["/about"] = function (ctx) {

  ctx.response.write(`route has query ${ctx.query.username}`)
}

handle["/post"] = function (ctx) {

  let html  = fs.readFileSync("./post.html", "utf8")
  ctx.response.writeHead(200, {
    "Content-Type": "text/html"
  })
  ctx.response.write(`postData is ${ctx.body.username}`)
  ctx.response.write(html)

}



server.start(router.routes, handle)
