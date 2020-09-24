var keys = document.querySelectorAll('#calculadora span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'C') {
			input.innerHTML = '';
		} else {
			input.innerHTML += btnVal;
		}
	} 
}