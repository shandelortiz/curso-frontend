function miFuncion() {
    console.log('Saludos desde mi funcion');
}

miFuncion();


// let miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion flecha');
// }

// const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funcion flecha';
// }

const saludar = () => 'Saludos desde funcion flecha';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludosd con parametros');