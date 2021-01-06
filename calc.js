var keys = document.querySelectorAll('#calculadora span');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;
var valores = [];

const operacao = new Operacao(valores);

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		operacao.valores = regex(inputVal);

		if(btnVal == 'C') {
			input.innerHTML = '';
		} else{
			input.innerHTML += btnVal;
		}

		if (btnVal == '+') {
			// valores = regex(inputVal);
			if (operacao.valores.length >= 2){
				result = operacao.sum();
				operacao.valores.push(result);
				console.log(operacao.valores);
				input.innerHTML = result;
			}
			
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