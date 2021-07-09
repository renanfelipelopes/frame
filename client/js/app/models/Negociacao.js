class Negociacao {

    constructor(data, quantidade, valor) {

        this._date = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._date;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}