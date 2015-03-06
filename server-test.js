var http = require('http');
var fs = require('fs');
var settings = require('./settings');
var server = http.createServer();
var msg;

server.on('request', function(req, res){
  fs.read File(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
    if(err){
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.write("not found");
      return res.end();
    }
    red.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(settings.port, settings.host);
console.log('server listening...');
