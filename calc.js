var keys = document.querySelectorAll('#calculadora span');
var operatorSelected = false;
var operador = '';
var isResult = false;
var valores = [];

var operacao = new Operacao(valores);

var input = document.querySelector('.screen');
var inputVal = input.innerHTML;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		// if (!operatorSelected){
		// 	input.innerHTML = '';
		// }

		if(btnVal == 'C') {
			input.innerHTML = '';
			operador = '';
			isResult = false;
			valores = [];
			operacao = new Operacao(valores);

		} else if (btnVal == '+') {

			operador = '+';
			if (inputVal != ''){
				if (!isResult){
					salvaOperando();
				} else {
					input.innerHTML = '';
				}
			} else {
				console.log("valor está vazio");
			}

		} else if (btnVal == '='){

			if (operador == '+'){
				salvaOperando();
				result = calculaSoma();
				isResult = true;
				input.innerHTML = result;
			}

		} else { 
			input.innerHTML += btnVal;
		}
	}
}

function regex(text){
	let regex = /\D/;
	return text.split(regex);
}

function salvaOperando(){
	operacao.valores.push(parseInt(inputVal));
	input.innerHTML = '';
	isResult = false;
}

function calculaSoma(){
	if (operacao.valores.length >= 2){
		operatorSelected = false;
	}
	result = operacao.sum();
	operacao.valores = [result];
	console.log(operacao.valores)
	
	return result;

}