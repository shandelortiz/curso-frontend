const autos = ['BMW', 'TOYOTA', 'VOLVO'];

for (let i = 0; i < autos.length; i++) {
    console.log( i + ' : ' + autos[i] );
}

autos[1] = 'FORD';

console.log(autos[1]);

// AGREGAR NUEVO DATO AL ARRAY
autos.push('audi');

console.log(autos);