let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,

    // METODO para mostrar el NOMBRE COMPLETO concatenando los atributos del objeto
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());