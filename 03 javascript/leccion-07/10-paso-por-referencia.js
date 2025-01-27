// Paso por REFERENCIA
const persona = {
    nombre: 'Shandel',
    apellido: 'Ortiz'
}

console.log('Primer dato sin modificar:');
console.log(persona);

function cambiarValorObjeto(p1) {
    p1.nombre = 'Noe';
    p1.apellido = 'Morales';
}

cambiarValorObjeto(persona);

console.log('Ya modificado:');
console.log(persona);