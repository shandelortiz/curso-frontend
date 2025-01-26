function miFuncion(a, b) {
    return a + b;
}

let resultado = miFuncion(2, 3);
console.log(resultado);

// Declaracion de una funcion de tipo expresion
let sumar = function (a, b) {return a + b;}

resultado = sumar(1, 2);
console.log(resultado);