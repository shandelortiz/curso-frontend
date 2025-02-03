let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function( titulo, telefono ) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de CALL para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto('Lic:', '11223344') );

console.log( persona1.nombreCompleto.call( persona2, 'Ing:', '22113344' ) );