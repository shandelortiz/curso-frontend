// NO es posible crear objetos antes de declarar la clase
// En este ejemplo no se aplica el concepto de HOISTING
// let persona2 = new Persona('Karla', 'Juarez');

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Shandel', 'Ortiz');
persona1.nombre = 'Juan Carlos'; // manda a llamar el método set nombre('Juan Carlos')
console.log( persona1.nombre ); // manda a llamar el método get nombre

let persona2 = new Persona('Karla', 'Juarez');
console.log( persona2 );