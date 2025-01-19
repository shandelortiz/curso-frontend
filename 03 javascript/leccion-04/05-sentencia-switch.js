let numero = 10;
let numeroTexto = 'Valor desconocido';

switch ( numero ) {
    case 1:
        numeroTexto = 'Numero uno';
    break;
    case 2:
        numeroTexto = 'Numero dos';
    break;
    case 3:
        numeroTexto = 'Numero 3';
    break;
    case 4:
        numeroTexto = 'Numero 4';
    break;
    default:
        numeroTexto = 'Caso no encontrado';
    break;
}

console.log(numeroTexto);