let nasc = parseInt(prompt('Digite seu ano de nascimento'));

let age = 2023 - nasc;

if(age >= 100) {
    alert('Você é muito velho.');
}

else if(age >= 60) {
    alert('Você não é obrigado a votar!');
}

else if(age >= 16) {
    alert('Você pode votar esse ano.')
} 

else if(age < 16){
    alert('Você não poderá votar esse ano.')
}



/*let password = prompt('Digite sua senha de quartro dígitos');

if(password === '1234') {
    alert('ACESSO PERMITIDO');
}
    
else{
    alert('ACESSO NEGADO');
}*/

// === idêntico
// == 
// =