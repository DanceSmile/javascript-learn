
function route(path, handle, response, postData) {
  if( typeof handle[path] === "function" ){
    handle[path](response, postData)
  }
}


exports.route = route
