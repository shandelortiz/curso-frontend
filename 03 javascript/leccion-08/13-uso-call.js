let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de CALL para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto() );

console.log( persona1.nombreCompleto.call( persona2 ) );