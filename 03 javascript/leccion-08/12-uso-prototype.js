function Persona(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;

    // METODO en CONSTRUCTOR
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '12345678';

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
padre.tel = '87654321';
console.log(padre.tel);

console.log('');

let madre = new Persona('Lucrecia', 'Morales', 'lmorales@gmail.com');
madre.tel = '18273645';
console.log(madre.tel);

console.log('');