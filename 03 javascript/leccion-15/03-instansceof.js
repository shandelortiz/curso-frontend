class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);

        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());

    // instanceof
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    } else if(tipo instanceof Empleado) {
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    } else if(tipo instanceof Object) {
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Juan', 3000);

let gerente1 = new Gerente('Carlos', 5000,'Sistemas');

imprimir(empleado1);
imprimir(gerente1);