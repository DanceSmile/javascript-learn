const http = require("http")
const url = require('url')
const querystring = require("querystring")

function start(route, handle){

  function request (request, response) {
    let pathname =  url.parse(request.url).pathname
    let postData = ''

    request.setEncoding("utf8");
    request.on("data", function (thunk) {
      postData += thunk
    })
    request.on("end", function () {
      console.log(`has client visit ${pathname}`)
      route(pathname, handle, response, querystring.parse(postData) )
    })

  }


  http.createServer(request)
  .listen(3000, function () {
    console.log("server is running in port 3000")
  })

}

exports.start = start
