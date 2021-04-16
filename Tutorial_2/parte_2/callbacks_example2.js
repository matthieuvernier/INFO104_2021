function miFuncion(a,b,callback) {
    console.log(a+b);
    callback();
}

a=0;
b=2;

miFuncion(a,b,function(){
    console.log('Hola !!');
})