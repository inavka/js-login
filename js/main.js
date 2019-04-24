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


	