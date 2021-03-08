var keys = document.querySelectorAll('#calculadora span');
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
			operandosPrioritarios = [];
			operacao = new Operacao(valores);

		} else if (btnVal == '+') {

			if (inputVal != ''){
				operacao = new Operacao(valores, '+');
				
				//Salva operando sem limpar o array
				if (!isResult){
					salvaOperando(parseInt(inputVal));
					if (operacao.valores.length >= 2){
						operacao.calcula(result => {
							operacao.valores.length = 0;
							operacao.valores.push(result);
						})
					}
				} else {
					//Zera o array e adiciona o resultado no array
					operacao.valores.length = 0;
					salvaOperando(parseInt(inputVal));
					input.innerHTML = '';
				}
			} else {
				console.log("valor está vazio");
			}

		} else if(btnVal == '-'){
		
			if (inputVal != ''){
				operacao = new Operacao(valores, '-');
				if (!isResult){
					salvaOperando(parseInt(inputVal));
				} else {
					operacao.valores.length = 0;
					salvaOperando(parseInt(inputVal));
					input.innerHTML = '';
				}
			} else {
				console.log('valor está vazio');
			}

		} else if(btnVal == '*'){
			
			operador = '*';
			if (inputVal != ''){
				if (!isResult){
					salvaOperandoPrioritario();
				} else {
					input.innerHTML = '';
				}
			} else {
				console.log('valor está vazio');
			}
			

		} else if (btnVal == '='){

			if (operador == '*'){
				salvaOperandoPrioritario();
			} else {
				salvaOperando(parseInt(inputVal));
			}
			operacao.calcula(result => {
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

function salvaOperando(operando){
	operacao.valores.push(operando);
	console.log("Operandos: "+operacao.valores);
	input.innerHTML = '';
	isResult = false;
}

let operandosPrioritarios = [];
function salvaOperandoPrioritario(){
	operandosPrioritarios.push(parseInt(inputVal));
	console.log(operandosPrioritarios);
	input.innerHTML = '';
	isResult = false;
}

// function calcula(operador, myCallback){
// 	var result;
// 	if (operador == '+'){
// 		result = calculaSoma();
// 	} else if (operador == '-'){
// 		result = calculaSubtracao();
// 	} else if (operador == '*'){
// 		result = calculaMultiplicacao();
// 	}
	
// 	return myCallback(result);
// }

// function calculaSoma(){
	
// 	result = operacao.sum();
// 	operacao.valores.length = 0;
// 	operacao.valores.push(result);
// 	console.log(operacao.valores);
	
// 	return result;
// }

function calculaSubtracao(){

	result = operacao.subtract();
	operacao.valores.length = 0;
	operacao.valores.push(result);
	console.log(operacao.valores);

	return result;
}

function calculaMultiplicacao(){
	
	result = operacao.multiplication(operandosPrioritarios);
	console.log("Resultado calculaMultiplicacao: "+result);

	return result;
	
}

function mostraResultado(result) {
	isResult = true;
	input.innerHTML = result;
}