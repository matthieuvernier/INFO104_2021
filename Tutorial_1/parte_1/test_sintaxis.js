/**** 1. Variables y tipo de datos ****/

// Declarar una variable con "let"
let username="Juan";        //cadena de caracteres
let age=24;                 //número
let hasDriverLicense=true;  //booleano
let diploma = ["Licenciatura en Ingeniería Informática", "Título de Ingeniero en Informática"]

//Nota Bene: el ";" al final de cada instrucción no es obligatorio. En Javascript "vuelta a la linea" puede reemplazar el ";"

console.log("1: "+username+" "+age+" "+hasDriverLicense+" "+diploma);
console.log("2: "+diploma[0]);


// Crear objeto
let user = {username, age, hasDriverLicense, diploma};

// Distintas maneraCondicioness de acceder a los atributos del objeto
console.log("3. "+user["username"]);
console.log("4. "+user.age);

/**** 2. Condiciones ****/
if (username.l=="Juan"){
    console.log("5: Hola Juan!")
}
else {
    console.log("5: Hola!")
}

/**** 3. Bocles ****/
for (i=0;i<diploma.length;i++){
    console.log(username+" tiene "+diploma[i]);
} 

i=0
while (i<3){
    console.log("Chao");
    i++;
}