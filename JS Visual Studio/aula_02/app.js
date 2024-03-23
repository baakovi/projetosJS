// let num1 = 10;
// let num2 = 2;
// let soma = num1 + num2;

// let num3 = 13;
// let num4 = 30;
// let soma2 = num3 + num4;

//Function: para usar/criar uma função

/* function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    
    document.querySelector('p').innerText += resultado + '\n';
}

somar(10, 5);
somar(4, 87.9); */

//Crie uma função que receba como argumento seu nome e imprima com um alert uma saudação
// "Olá seu nome bom dia!"



/*function nome(seu_nome) {
    alert(`Olá ${seu_nome}, bom dia!`)
}

let seu_nome = prompt('Insira seu nome:')
nome(`${seu_nome}`); */

// Crie uma função que receba três notas de alunos como argumento e imprima com um alert uma mensagem "foi aprovado" se sua média for igual ou maior que 5.0 e "foi reprovado" se sua média for menor que 5.0

// function notas(nota1, nota2, nota3) {
//     let somar = nota1 + nota2 + nota3;
//     let media = somar / 3;

//     if(media >= 5.0) { 
//         document.querySelector('p').innerText += `Você foi aprovado com a média: ${media}` + '\n';
//         /*alert('Você foi aprovado com a média: ' + media);*/
//     } 

//     else {
//         document.querySelector('p').innerText += `Você foi reprovado com a média: ${media}` + '\n';
//         /*alert('Você foi reprovado com a média: ' + media);*/
//     }
// }

// notas(4, 5, 7);
// notas(7, 2, 1); 


// Escreva uma função em JavaScript que conte qauntas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

/*let nome = 'Pamela';

nome = nome.toLowerCase();

let contador = 0;

let letra = 'e';

for(let i = 0; i < nome.length; i++) {
    //console.log(nome.charAt[i]);

    if(nome[i] === 'a') {
        contador++;
    }
}

console.log(contador); */

//Teste de igualdade

/*for(let i = 0; i < nome.length; i++) {
    //console.log(nome.charAt[i]);

    if(nome[i] === 'a') {
        console.log(nome[i] + ' é igual');
    }

    else {
        console.log(nome[i] + ' não é igual');
    }
} */


/* function contaLetra(letra, palavra) {
    palavra = palavra.toLowerCase();
    let contador = 0;

    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            contador++;
        }
    }

    console.log(contador);  
}

contaLetra('t', 'Tatara'); */

// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string "Beterraba", e a função escreve o número 4 (há 4 vogais nessa palavra).

// function contaVogal(exemplo) {
//     exemplo = exemplo.toLowerCase();
//     let cont = 0;
//     let vogal['a', 'e', 'i', 'o', 'u'];

//     for(let i = 0; i < exemplo.length; i++) {
//         if(exemplo[i] === vogal) {
//             contador++;
//         }
//     }

//     console.log(cont);
// }

// contaVogal('', 'Limao');

function contaVogal(palavra) {
        let contador = 0;
        palavra = palavra.toLowerCase();

        for(let i = 0; i < palavra.length; i++) {

        if(palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u'){
            contador++;    
        }
    }

    console.log(contador);
}

contaVogal('Toranja');

//contaVogal('Limao');

let idade = 63;

if(idade < 16) {
    console.log('Não pode votar');
}

else if(idade === 16 || idade >= 60) {
    console.log('Não é obrigado a votar');
}

else if(idade > 16 && idade <= 17) {
    console.log('Ainda não é obrigado a votar');
}

else {
    console.log('Pode votar');
}

// '||' = 'ou'      '&&' = 'e'
// nome.tolowercase()
//ToLowerCase ou ToUpperCase
// nome = nome.ToLowerCase (para atualizar a variável)


//Tipos de Funções
//TRADICIONAL
function somaAnko(a, b) {
    let resultado = a * b;
    return resultado;
}

let valor = somaAnko(15, 20);

console.log('O valor retornado é: ' + valor);


//ANÔNIMA
let somaAko = function(a, b) {
    let resultado = a + b;
    return resultado;
}

let result = somaAko(2, 3);
console.log(result);


//ANÔNIMA ABREVIADA ARROW
let somaAnko2 = (a, b) => {
    let resultado = a - b;
    return resultado;
}

console.log(somaAnko2(5,7));

let loga = () => {
    let palavra = 'Olá';
    return palavra;
}

let oi = loga();