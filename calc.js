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

		} else if(btnVal == '-'){
		
			operador = '-';
			if (inputVal != ''){
				if (!isResult){
					salvaOperando();
				} else {
					input.innerHTML = '';
				}
			} else {
				console.log('valor está vazio');
			}

		} else if (btnVal == '='){

			salvaOperando();
			calcula(operador, function(result){
				mostraResultado(result);
			});

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

function calcula(operador, myCallback){
	var result;
	if (operador == '+'){
		result = calculaSoma();
	} else if (operador == '-'){
		result = calculaSubtracao();
	}
	
	return myCallback(result);
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

function calculaSubtracao(){
	if (operacao.valores.length >= 2){
		operatorSelected = false;
	}

	result = operacao.subtract();
	operacao.valores = [result];
	console.log(operacao.valores);

	return result;
}

function mostraResultado(result) {
	isResult = true;
	input.innerHTML = result;
}