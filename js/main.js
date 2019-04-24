function insertLogin() {

let login = prompt('Your login', " ");

if (login == null) {
    alert('Login canceled');
} else if (login === "Admin")  {
    var password = prompt('Your password', "");
} else {
    alert('I don\'t know you');
}

if (password == null) {
    alert('Login canceled');
} else if (password === 'Black Master') {
    alert('Welcome!');
} else {
    alert('Password incorrect');
} 
}

function getPrimeNumbers() {
	let firstNumber = prompt('Your first number', 0);
	let secondNumber = prompt('Your second number', 0);

	let min = (firstNumber <= secondNumber) ? firstNumber : secondNumber;
	let max = (firstNumber >= secondNumber) ? firstNumber : secondNumber;

	nextPrime:
	for (var i = min; i < max; i++) {
		for (var a = 2; a < i; a++) {
			if (i % a == 0) continue nextPrime;
				}
			alert (i);
			}
}

	