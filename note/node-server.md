##  使用 nodejs 创建 http server

### 基础的http服务器

```
// main.js
const http = require('http')

http.createServer( function(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  })

  response.write("hello node server ~~")
  response.end()
}).listen(3000, function() {
    console.log(' server is running in 3000 port')
})
```
打开浏览器访问 localhost:3000 将会返回

```
hello node server ~~
```

 ### 组织代码

```
 // server.js

 const http = require("http")

 function start() {
   function onRequest(request, response){

     response.writeHead(200, {
       "Content-Type": "text/plain"
     })

     response.write("hello node server ~~")
     response.end()

   }
    http.createServer(onRequest).listen(3000, function() {
     console.log(' server is running in 3000 port')
   })
 }

 exports.start = start
```
 ```
// main.js

const server = require('./server')
server.start()
```

### 实现路由

```
// router.js

const url = require("url")

function routes(ctx, handle) {
    var pathname = url.parse(ctx.request.url).pathname
    if( typeof handle[pathname] == 'function' ){
       handle[pathname](ctx)
    }else{
      ctx.response.write("404")
    }
    ctx.response.end()
}

exports.routes = routes
```

```
// main.js

const server = require('./server')
const router = require("./router")

server.start(router.routes)
```

```
// server.js

const http = require("http")

function start(routes) {
  function onRequest(request, response){
      routes(request,response)
  }
   http.createServer(onRequest).listen(3000, function() {
    console.log(' server is running in 3000 port')
  })
}

exports.start = start
```

```
// server.js

const server = require('./server')
const router = require("./router")

const handle = {}

server.start(router.routes, handle = {})
```

### 添加路由

```
const server = require('./server')
const router = require("./router")

const handle = {}


handle["/"] = function (ctx) {
  ctx.response.write("index handle")
}
handle["/about"] = function (ctx) {
  ctx.response.write("about handle")
}

server.start(router.routes, handle = {})
```

### 封装 get

```
// router.js

const url = require("url")

function routes(ctx, handle) {
    var url_parse = url.parse(ctx.request.url, true)
    ctx.query = url_parse.query
    if( typeof handle[url_parse.pathname] == 'function' ){
       handle[url_parse.pathname](ctx)
    }else{
      ctx.response.write("404")
    }
    ctx.response.end()
}

exports.routes = routes
```

```
// main.js

const server = require('./server')
const router = require("./router")

const handle = {}
handle["/"] = function (ctx) {

  ctx.response.write("index handle")

}
handle["/about"] = function (ctx) {

  ctx.response.write(`route has query ${ctx.query.username}`)
}

server.start(router.routes, handle)
```
访问 http://localhost:3000/about?username=zero

```
route has query zero
```

### 封装post

```
// route.js

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
```

```
// main.js

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

```
