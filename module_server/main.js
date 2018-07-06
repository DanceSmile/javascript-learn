const server = require("./server")
const router = require("./router")
const fs = require('fs')
const querystring = require("querystring")
const handle  = {}
handle["/"]  = function (response) {
  response.end("index")
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
