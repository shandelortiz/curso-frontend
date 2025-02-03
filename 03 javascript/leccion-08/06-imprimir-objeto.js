let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// Primera forma - Concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido + ', ' + persona.correo );

console.log('');

// Segunda forma - con FOR IN
for( nombrePropiedad in persona ) {
    console.log( persona[nombrePropiedad] );
}

console.log("");

// Tercera forma
let personaArray = Object.values( persona );
console.log( personaArray );

console.log('');

// Cuarta forma
let personaString = JSON.stringify( persona );
console.log( personaString );