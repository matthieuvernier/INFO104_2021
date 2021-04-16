var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./archivo.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(data);
        return res.end();
    });
}).listen(8085);

// Console will print the message
console.log('Server running at http://127.0.0.1:8085/');