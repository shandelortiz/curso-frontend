"use strict"

try {
    let x = 10;
} catch (error) {
    console.log(error);
}

// Bloque finally es OPCIONAL
finally {
    console.log('Termina la revision de errores');
}

console.log('Continuamos...');