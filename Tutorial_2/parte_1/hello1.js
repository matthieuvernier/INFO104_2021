//Cargar el modulo HTTP de Node.js y almacenar la instancia del servidor HTTP en una variabla 'http'
let http = require("http");

//Crear un servidor HTTP que escucha el puerto 8081 y devuelve una respuesta HTTP cuando recibe una consulta.

http.createServer(function (request, response) {
    // Header de la respuesta HTTP 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Body de la respuesta HTTP"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');