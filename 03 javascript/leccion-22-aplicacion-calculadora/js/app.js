function sumar() {
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if (isNaN(resultado)) {
        resultado = 'La operacion no incluye ningun numero, por favor, ingrese los valores';
    } else {
        document.getElementById('resultado').innerHTML = `Resultado: ${ resultado }`;
    }

    
}