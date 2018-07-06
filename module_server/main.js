const server = require("./server")
const router = require("./router")
const fs = require('fs')
const querystring = require("querystring")
const handle  = {}
handle["/"]  = function (response) {
  setTimeout(function() {
      console.log( "timeout 5000")
      let start = new Date().getTime()
      while ( (new Date().getTime() ) < start + 2000 ) {

      }
      response.end("index")
  }, 5000)
}

handle["/about"]  = function (response) {
  response.end("about")
}

handle['/post'] = function (response, postData) {

    console.log( postData )
    let html = ''
    fs.readFile("./post.html", function (err, data) {
        response.end(data)
    })

}

server.start(router.route, handle)
