class Operacao {

    constructor(array, operador) {
        this._valores = array;
        this._operador = operador;
    }

    calcula(myCallback){

        var resultado;

        switch(this._operador){
            case '+':
                resultado = this.sum();
                break;
            case '-': 
                resultado = this.subtract();
                break;                
        }

        return myCallback(resultado);
    }

    sum() {
        var soma = 0;

        this._valores.forEach(element => {
            soma += element;
        });
        return soma;
    }

    subtract() {
        var result = valores[0] - valores[1];

        for (var i = 1; i < valores.length - 1 ; i++ ){

            result -= valores[i + 1];

        }

        return result;
    }

    //parametro operatos is an array of operands
    multiplication(operandos){
        
        var i = 0;
        let multiplication = operandos[i];
        do {
            multiplication *= operandos[i + 1];
            i++;
        } while (i < operandos.length - 1);

        console.log("Total: "+ multiplication);

        return multiplication;
    }

    set valores(valores){
       this._valores = valores;
    }

    get valores(){
        return this._valores;
    }
}