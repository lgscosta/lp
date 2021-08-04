var http = require('http');

http.createServer(function(req, res){
  res.end("eu amo abacate, me faz feliz");
}).listen(8080);