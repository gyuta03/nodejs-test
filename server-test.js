var http = require('http');
var settings = require('./settings');
var fs = require('fs');
var server = http.createServer();
var msg;

server.on('request', function(req, res){
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
    if(err){
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.write("not found");
      return res.end();
    }
//    case '/':
//      msg = "top page"
//      break;
//    case '/about':
//      msg = "about me";
//      break;
//    case '/profile':
//      msg = "my profile";
//      break;
//    default:
//      msg = "error page";
//      break;
//  }
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  });
//  switch (req.url) {
});

server.listen(settings.port, settings.host);
console.log('server listening...');
