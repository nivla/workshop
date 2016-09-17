var http = require('http'),
  fs = require('fs'),
  path = require('path'),
  mime = require('mime')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var pathResource,
     file,
     resource,
     contentType;

  pathResource = req.url
  if(pathResource === '/') {
    resource = 'index.html'
  }
  try{
    var contents = fs.readFileSync(resource)
    contentType  = mime.lookup(resource)
    res.writeHead(200, {'Content-Type': contentType})
    res.end(contents)
  } catch(err) {
    res.end(err.message)
  }
})

console.log(process.cwd(), __dirname);

server.listen(3000)
console.log('server started')
