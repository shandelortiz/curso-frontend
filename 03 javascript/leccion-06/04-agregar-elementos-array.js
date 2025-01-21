const autos = ['BMW', 'TOYOTA', 'VOLVO'];

for (let i = 0; i < autos.length; i++) {
    console.log( i + ' : ' + autos[i] );
}

// AGREGAR NUEVO DATO AL ARRAY
autos.push('audi');

console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);

autos[6] =  'Porshe';
console.log(autos);


// Preguntar si es un ARRAY
console.log( Array.isArray(autos) );

// Preguntar si la instancia es de tipo ARRAY
console.log( autos instanceof Array );