/*
6am a 11am - BUENOS DIAS
12pm a 18pm - BUENAS TARDES
19pm a 24pm - BUENAS NOCHES
0am a 6am - DURMIENDO
*/

let hora = 5;
let estado;

if ( hora >= 6 && hora <= 11 ) {
    estado = "BUENOS DIAS";
} else if ( hora >= 12 && hora <= 18 ) {
    estado = "BUENAS TARDES"
} else if ( hora >= 19 && hora <= 24 ) {
    estado = "BUENAS NOCHES";
} else if ( hora >= 0 && hora <= 5 ) {
    estado = "DURMIENDO";
}

console.log(estado);