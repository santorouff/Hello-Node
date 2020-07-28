var http = require('http');

var port = process.env.PORT || 8080;  // variável de ambiente do Heroku para armazenar a porta

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);