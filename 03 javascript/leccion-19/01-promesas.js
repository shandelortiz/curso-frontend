let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;

    if(expresion) {
        resolved('Resolvio correctamente');
    } else {
        rejected('Se produjo un error');
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    // console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y timeOut'), 3000);
    // console.log('Fin promesa');
});

// promesa.then(valor => console.log(valor));



// ASYNC indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

// miFuncionConPromesa().then(valor => console.log(valor));

// ASYNC con AWAIT
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

// funcionConPromesaYAwait()

// Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con Await y Timeout'), 3000);
    });

    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();