function Persona(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;

    // METODO en CONSTRUCTOR
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre.nombreCompleto());

console.log('');

let madre = new Persona('Lucrecia', 'Morales', 'lmorales@gmail.com');
console.log(madre.nombreCompleto());

console.log('');

let hijo = new Persona('Shandel', 'Ortiz', 'sortiz@gmail.com');
console.log(hijo.nombreCompleto());