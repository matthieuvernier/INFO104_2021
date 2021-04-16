
console.log("Programa iniciado!");

let fs = require("fs");

let data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Programa terminado!");