let reloj = () => {
    let fecha = new Date();

    console.log(`${ fecha.getHours() }:${ fecha.getMinutes() }: ${ fecha.getSeconds() }`);
}

setInterval(reloj, 1000); // Imprimer cada 1 segundo la informacion obtenida