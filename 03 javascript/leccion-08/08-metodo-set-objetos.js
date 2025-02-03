let persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz',
    correo: 'sortiz@gmail.com',
    edad: 22,
    idioma: 'es',

    get lang() {
        return this.idioma.toUpperCase();
    },

    // SET (Establecer o modificar)
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang);


persona.lang = 'en';
console.log(persona.lang);

console.log('');

console.log(persona.idioma);
