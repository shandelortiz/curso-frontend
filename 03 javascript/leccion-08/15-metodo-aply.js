let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, telefono) {
        // return this.nombre + ' ' + this.apellido;

        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de CALL para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log( persona1.nombreCompleto( 'Lic:', '11223344' ) );

let arreglo = ['Ing', '11223344'];

console.log( persona1.nombreCompleto.apply( persona2, arreglo ));