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

    subtract() {
        var result = 0;

        for (var i = 0; i < valores.length -1 ; i++ ){
            var val1 = valores[i];

            result = val1 - valores[i + 1];
            
        }

        return result;
    }

    set valores(valores){
       this._valores = valores;
    }

    get valores(){
        return this._valores;
    }
}