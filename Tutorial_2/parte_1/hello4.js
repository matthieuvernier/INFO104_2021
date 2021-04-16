var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  console.log(req)

  res.write("¿Cuál método del protocolo HTTP se utilizó?:")
  res.write(req.method + "<br>");
  res.write("¿Cuál URL pidió?:")
  res.write(req.url + "<br>");

  let q = url.parse(req.url, true).query;
  console.log(q);

  res.write("¿Cuáles son los parámetros de la URL que pidió?<br>");
  var keyNames = Object.keys(q);
  res.write(keyNames+"<br>");
  res.write("¿Cuáles son los valores de los parámetros de la URL que pidió?<br>");
  for (i=0;i<keyNames.length;i++){
    res.write(q[keyNames[i]]+" ");
  }
  res.end("<br> Esta página fue generada autofile1máticamente.");
}).listen(8084);

// Console will print the message
console.log('Server running at http://127.0.0.1:8084/');