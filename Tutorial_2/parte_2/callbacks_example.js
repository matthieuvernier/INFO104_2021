
/**function compute (n1, n2, callback) {
    return callback(n1, n2);
}**/

const compute = (n1, n2, callback) => callback(n1,n2)

/**function sum (n1, n2) {
    return n1 + n2;
}**/

const sum = (n1, n2) => n1 + n2;

/**function product (n1, n2) {
    return n1 * n2;
}**/

const product = (n1, n2) => n1 * n2;

/** Como pueden ver, la función "compute" toma 2 parámetros y un función callback. Esta función callback puede ser "sum" o "product"
 * o cualquier otra función que toma dos enteros como parametros.*/
console.log(compute(5, 3, sum));     // ↪️  8
console.log(compute(5, 3, product)); // ↪️  15