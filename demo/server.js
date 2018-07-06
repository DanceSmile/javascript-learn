const http = require("http")

function start(routes, handle) {
  function onRequest(request, response){
      var ctx = {
        request,
        response
      }
      routes(ctx, handle)
  }
   http.createServer(onRequest).listen(3000, function() {
    console.log(' server is running in 3000 port')
  })
}

exports.start = start
