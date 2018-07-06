const http = require("http")


http.createServer(function (resquest, response) {

  response.writeHead(200, {
    "Content-Type": "text/plain"
  })

  response.write("hello node server ~~")
  response.end()

})
.listen(3000, function () {
  console.log("server is running in port 3000")
})
