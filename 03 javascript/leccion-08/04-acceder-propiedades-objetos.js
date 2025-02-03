let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// Se puede acceder como si fuera un ARRAY
console.log( persona['nombre'] + ' ' + persona['apellido'] );

console.log('');

// Acceder al objeto utilizando FOR IN
for (let nombrePropiedad in persona) {
    console.log( nombrePropiedad );

    console.log( persona[nombrePropiedad] );
}