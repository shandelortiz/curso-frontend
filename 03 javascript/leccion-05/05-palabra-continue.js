inicio:
for (let contador = 0; contador <= 10; contador++) {
    if ( contador % 2 !== 0 ) {
        continue inicio; // IR A LA SIGUIENTE ITERACCION
    }
    console.log(contador);
}