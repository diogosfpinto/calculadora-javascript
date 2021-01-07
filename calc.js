var keys = document.querySelectorAll('#calculadora span');
var operatorSelected = false;
var decimalAdded = false;
var valores = [];

var operacao = new Operacao(valores);

var input = document.querySelector('.screen');
var inputVal = input.innerHTML;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if (operatorSelected){
			input.innerHTML = '';
		}

		if(btnVal == 'C') {
			input.innerHTML = '';
			valores = [];
			operacao = new Operacao(valores);
		} else if (btnVal == '+') {
			operatorSelected = true;
			salvaOperando();
			console.log(operacao.valores)

			if (operacao.valores.length >= 2){
				result = operacao.sum();
				operacao.valores = [];
				operatorSelected = false
				input.innerHTML = result;
			}
		} else {
			input.innerHTML += btnVal;
		}

		if (btnVal == '-') {
			valores= regex(inputVal);
			// operacao.firstValue(valores);
			console.log(valores);
		}
		
		if (btnVal == '='){
			

			const element = regex(inputVal);
			input.innerHTML = element;
			console.log(element);
		}
	}
}

function regex(text){
	let regex = /\D/;
	return text.split(regex);
}

function salvaOperando(){
	operacao.valores.push(inputVal);
}