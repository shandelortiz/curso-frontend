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

    get apellido() {
        this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);  // llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    // SOBREESCRITURA
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento;
    }

    // Se está sobreescribiendo el método de la clase Padre(object)
    toString() {
        // Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        // el metodo que se ejectura depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar() {
        console.log('Saludos desde el método static');
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

let persona1 = new Persona('Shandel', 'Ortiz');
console.log( persona1 );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);

console.log( empleado1.nombreCompleto() );

console.log(empleado1.toString());


// persona1.saludar();
Empleado.saludar();
Empleado.saludar2(persona1);