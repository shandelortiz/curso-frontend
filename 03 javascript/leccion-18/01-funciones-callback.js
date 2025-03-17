function miFuncion1() {
    console.log('Funcion 1');
}

function miFuncion2() {
    console.log('Funcion 2');
}

miFuncion1();
miFuncion2();

// Funcion de tipo CALLBACK
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let resultado = op1 + op2;

    funcionCallback(`Resultado: ${resultado}`);
}

sumar(5, 3, imprimir);


// Llamadas asincronas con uso de SETTIMEOUT
function miFuncioCallback() {
    console.log('Saludos asincrono despues de 3 segundos');
}

setTimeout(miFuncioCallback, 3000); // se ejecuta despues de 3 segundos

setTimeout(function() {console.log('Saludos asincrono 2')}, 4000);

setTimeout( () => console.log('Saludo asincrono 3'), 5000 );