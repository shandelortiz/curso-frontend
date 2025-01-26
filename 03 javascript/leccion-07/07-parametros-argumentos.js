let sumar = function (a = 4, b = 5) {
    console.log('Argumento 1:' + arguments[0]);
    console.log('Argumento 2:' + arguments[1]);
    console.log('Argumento 3:' + arguments[2]);

    return a + b;
}

resultado = sumar(3, 6, 8);
console.log('Resultado de la suma: ' + resultado);