let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// AGREGAR o EDITAR un objeto
persona.edad = 40;

console.log(persona);

// ELIMINAR (Se borra tanto PROPIEDAD como el VALOR que contenga)
delete persona.correo;

console.log( persona );