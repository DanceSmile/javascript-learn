const url = require("url")
const querystring = require("querystring")

function routes(ctx, handle) {
    var url_parse = url.parse(ctx.request.url, true)
    ctx.query = url_parse.query

    let postData = ''
    ctx.request.on('data', function (thunk) {
        postData += thunk
    })

    ctx.request.on("end", function () {
      console.log("request on end")
      ctx.body = querystring.parse( postData )
      if( typeof handle[url_parse.pathname] == 'function' ){
         handle[url_parse.pathname](ctx)
      }else{
        ctx.response.write("404")
      }
      ctx.response.end()
    })

}

exports.routes = routes
