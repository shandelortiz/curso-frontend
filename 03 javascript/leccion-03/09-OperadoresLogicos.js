// OPERADOR LOGICO AND ( && ), regresa true SOLO SI ambos operandos son true
let a = 6;
let valorMinimo = 0, valorMaximo = 10;

if ( a >= valorMinimo && a <= valorMaximo ) {
    console.log("Numero dentro del rango");
} else {
    console.log("Numero fuera del rango");
}



// OPERADOR LOGICO OR ( || ), regresa true si CUALQUIERA de los operandos es true
let vacaciones = true, diaDescanso = false;

if ( vacaciones || diaDescanso ) {
    console.log("El padre puede asistir al juego del hijo");
} else {
    console.log("El padre esta ocupado");
}