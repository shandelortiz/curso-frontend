class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(fechaRegistro) {
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