class Operacao {

    constructor(array) {
        this._valores = array;
    }

    sum() {
        var soma = 0;

        this._valores.forEach(element => {
            soma += element;
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