class Persona {

    static contadorPersonas = 0;

    // Atributos por medio de un constructor
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Métodos para cada atributo
    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = this.nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = this.apellido;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    
    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo) {
        // Llamada a la clase PADRE(Persona)
        super(nombre, apellido, edad);

        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        // Llamada a la clase PADRE(Persona)
        super(nombre, apellido, edad);

        this._idcliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idcliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${ super.toString() } ${ this._idCliente } ${ this._fechaRegistro }`;
    }
}


// Prueba clase PERSONA
let persona1 = new Persona('Shandel', 'Ortiz', 22);
console.log( persona1.toString() );

let persona2 = new Persona('Juan', 'Guzman', 24);
console.log( persona2.toString() );

// Prueba clase EMPLEADO
let empleado1 = new Empleado('David', 'Ramirez', '25', 4500);
console.log( empleado1.toString() );

let empleado2 = new Empleado('Laura', 'Quintero', '33', 7000);
console.log( empleado2.toString() );

// Prueba clase CLIENTE
let cliente1 = new Cliente('Raul', 'Garcia', '30', new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Samuel', 'Perez', 44, new Date());
console.log( cliente2.toString() );