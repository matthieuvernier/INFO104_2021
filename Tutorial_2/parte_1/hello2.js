let http = require('http');
let dt = require('./datetime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("La fecha es: " + dt.myDateTime()+"<br>");
  res.write("Chao!");
  res.end();
}).listen(8082); 


console.log('Server running at http://127.0.0.1:8082/');