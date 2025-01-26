function miFuncion(a, b) {
    console.log(arguments.length);

    return a + b;
}

var miFuncionTexto = miFuncion.toString()
console.log(miFuncionTexto);