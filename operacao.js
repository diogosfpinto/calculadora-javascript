class Operacao {

    constructor(array) {
        this._valores = array;
    }

    sum() {
        var soma = 0;

        this._valores.forEach(element => {
            const elementoFormatado = parseInt(element);
            soma += elementoFormatado;
        });
        return soma;
    }

    set valores(valores){
       this._valores = valores;
    }

    get valores(){
        return this._valores;
    }
}