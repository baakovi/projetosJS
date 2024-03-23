let texto = 'O homem vem lutando contra pragas desde o início. Nós levamos a pior durante um tempo. E depois nós respondemos. É a natureza se corrigindo. Restaurando o equilíbrio.'
// Frase dita por Hershel no episódio 'Sangria'.

// document.querySelector('p').innerText

/*for (let i = 0; i < texto.length; i++) {
    document.querySelector('p').textContent += texto[i];
} */

let i = 0;

    let limpa = setInterval(() => {
        document.querySelector('p').textContent += texto[i];
        i++;

        if(i === texto.length) {
            clearInterval(limpa);
        }
    }, 50);