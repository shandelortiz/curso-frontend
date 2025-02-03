// Funcion CONSTRUCTOR de OBJETOS de tipo Persona
function Persona(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
}

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre);

console.log('');

let madre = new Persona('Lucrecia', 'Morales', 'lmorales@gmail.com');
console.log(madre);

console.log('');

let hijo = new Persona('Shandel', 'Ortiz', 'sortiz@gmail.com');
console.log(hijo);




padre.nombre = 'Noe';
padre.apellido = 'Ortiz';
padre.correo = 'nortiz@gmail.com';

console.log('');

console.log(padre);