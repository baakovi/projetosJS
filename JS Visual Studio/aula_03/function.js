//ANÔNIMA ABREVIADA ARROW
/*let somaAnko2 = (a, b) => {
    let resultado = a - b;
    return resultado;
}

console.log(somaAnko2(5,7));

let loga = () => {
    let palavra = 'Olá';
    return palavra;
}

let oi = loga(); */


// DizOlá
/*let dizOla = (nome, periodo) => {
    if(periodo === 'Manhã') {
        return `Olá ${nome}, bom dia!`;
    } else {
        return `Olá ${nome}, já estou com sono..`;
    }
}

let frase = dizOla('Felippe', 'Manhã');
console.log(frase); */


// Médias
/*let notas = (n1, n2, n3) => {
    let adicao = n1 + n2 + n3
    let media = adicao / 3

    if(media >= 5.0) {
        return `Você foi aprovado com a média: ${media}`;
    } else {
        return `Você foi reprovado com a média: ${media}`;
    }
}

let nota = notas(9, 3, 6);
console.log(nota); */


// ContaLetra
/*let contaLetra = (letra, palavra) => { 
    palavra = palavra.toLowerCase();
    let contador = 0;

    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            contador++
        }
    }
    return contador;
}

let conta = contaLetra('a', 'Tamara');
console.log(conta);*/


// Vogais
/*let contaVogal = (palavra) => {
    let contador = 0;
    palavra = palavra.toLowerCase();

    for(let i = 0; i < palavra.length; i++) {

        if(palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
            contador++
        }
    }
    return contador;
}

let vogal = contaVogal('Toranja');
console.log(vogal);*/