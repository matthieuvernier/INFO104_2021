let http = require("http");
let dt = require('./datetime');

http.createServer(function (request, response) {

    console.log(request)

    // Header de la respuesta HTTP 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });


    // Body de la respuesta HTTP"
    response.write("Usted pidió la ruta: "+request.url+"<br>")
    response.write("La fecha es: " + dt.myDateTime()+"<br>");
    response.write("Chao!");
    response.end();
}).listen(8083);

// Console will print the message
console.log('Server running at http://127.0.0.1:8083/');