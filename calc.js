var keys = document.querySelectorAll('#calculadora span');
var operatorSelected = false;
var operador = '';
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
			valores = [];
			operacao = new Operacao(valores);

		} else if (btnVal == '+') {

			operador = '+';
			if (operacao.valores.length == 0){
				salvaOperando();
			} else {
				input.innerHTML = '';
			}

		} else if (btnVal == '='){

			if (operador == '+'){
				salvaOperando();
				console.log(operacao.valores)
				result = calculaSoma();
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
	if (inputVal != ''){
		operacao.valores.push(parseInt(inputVal));
		input.innerHTML = '';
	} else {
		console.log("valor está vazio");
	}
}

function calculaSoma(){
	if (operacao.valores.length >= 2){
		operatorSelected = false;
	}
	result = operacao.sum();
	operacao.valores = [result];
	
	return result;

}