// console.log('Este app está funcionando...');

// DOM - DOCUMENT OBJECT MODEL

// let texto = document.querySelector('p').innerText;

// alert(texto);

// propriedade: InnerText, inserir o texto direto pro HTML

// a tag '\n' no innerText é tratado como um Enter ou '<br>' no HTML

// let texto = "Joana \n Marta \n Ruan \n Joselito";


//VETOR ou ARRAY

// let maca = 10;
// let banana = 20;
// let jaca = 5;
// let manga = 9;
// let melancia = 15;

// let frutas = [maca, banana, jaca, manga, melancia];

// document.querySelector('h1').innerText = frutas[0] + "\n" + frutas[4];

// Erro NaN: not a number, não é um número.

// Crie um vetor contendo 10 letras e acesse cada elemento via seus índices imprimindo na página um abaixo do outro.



/*let letras = ['D', 'i', 'c', 'i', 'o', 'n', 'a', 'r', 'i', 'o'];

document.querySelector('h1').innerText = letras[0] + "\n" + letras[1] + "\n" + letras[2] + "\n" + letras[3] + "\n" + letras[4] + "\n" + letras[5] + "\n" + letras[6] + "\n" + letras[7] + "\n" + letras[8] + "\n" + letras[9]; */


// WHILE

/*let i = 0;

while(i <= 10) {
    console.log('oi');
    i = i + 1;
} */


// Imprima no console os números de 1 a 20 usando o loop WHILE

let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

let n = 0;

while(n < letras.length) {
    document.querySelector('p').innerText += letras[n] + '\n';
    //document.querySelector('h1').innerText = document.querySelector('h1').innerText + letras[n] + '\n';
    /* n = n + 1; */
    n++; 
    /* 'n = n + 1' e 'n++' possuem a mesma propriedade */ 
} 

document.querySelector('p').innerText = '';

let numeros = [10, 20, 30, 40, 50, 60, 70, 80];

for(let j = 0; j < numeros.length; j++) {
    document.querySelector('p').innerText += numeros[j] + '\n';
} 

//Pop: tira o último item do vetor

//Push: coloca o item no final do vetor