let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,

    // GET (Obtener)
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);
