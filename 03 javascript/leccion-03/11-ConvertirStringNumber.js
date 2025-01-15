let miNumero = "20x";

let edad = Number(miNumero);


if ( isNaN( edad ) ) {
    console.log("No es un numero");
} else {
    if ( edad >= 18 ) {
        console.log("La persona puede votar");
    } else {
        console.log("La persona es muy joven para votar");
    }
}


// console.log(typeof edad);


//          EJERCICIO
// edad = ( edad >= 18 ) ? "La persona puede votar" : "La persona es muy joven para poder votar";
// console.log(edad);