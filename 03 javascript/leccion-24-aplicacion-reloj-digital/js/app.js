const mostrarReloj = () => {
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    let am_pm = hr >= 12 ? 'PM' : 'AM';

    // Estilo segun la hora
    if (hr >= 6 && hr < 12) {
        // Mañana
        document.body.style.backgroundColor = '#FFFAE3';
        document.body.style.color = '#333'
    } else if (hr >= 12 && hr < 18) {
        // Tarde
        document.body.style.backgroundColor = '#D4ECFF';
        document.body.style.color = '#222'
    } else {
        // Noche
        document.body.style.backgroundColor = '#1E1E2F';
        document.body.style.color = '#FFFFFF';
    }

    // Convertir hora de 24 horas a 12 horas
    hr = hr%12;
    hr = hr ? hr : 12; // Si hr es 0, entonces se convierte en 12;

    hr = formatoHora(hr);

    document.getElementById('hora').innerHTML = `${ hr }:${ min }:${ seg } ${ am_pm }`;

    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    const dias = [
        'Dom',
        'Lun',
        'Mar',
        'Mie',
        'Jue',
        'Vie',
        'Sab'
    ];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    return hora < 10 ? '0' + hora : hora;
}

setInterval(mostrarReloj, 1000);