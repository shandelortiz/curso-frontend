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



let miObjeto = new Object(); // Primera forma de crear
let miObjeto2 = {

} // Segunda forma de crear

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {
    
}