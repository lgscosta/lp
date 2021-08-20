// process.title = 'MyWebServer';
// var args = process.argv;
// var port = args[2] || 7070;
// import { listen } from './server';
// listen(port, function(){
//     console.log('Server started at port ' + port);
// });


import { createServer } from 'http';

createServer(function(req, res){
  res.end("eu amo abacate, me faz feliz");
}).listen(8080); 