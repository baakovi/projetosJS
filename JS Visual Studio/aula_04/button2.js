// ARQUIVO COM CORREÇÃO DA ATIVIDADE COM O PROFESSOR

var i = 0;
var limpar;
var rodando = true;
/*
let limpar = setInterval(()=>{
    document.querySelector('p').innerText = i;
    i++;
}, 1000);
*/
let executaTimer = () => {
    if(rodando === true){
        limpar = setInterval(()=>{
            document.querySelector('p').innerText = i;
        i++;
        }, 1000);
        rodando = false;
    }
}

let zerar = () =>{
    i = 0;
    clearInterval(limpar);
    document.querySelector('p').innerText = i;
    rodando = true;
}

document.getElementById('restart').addEventListener('click', executaTimer);

document.getElementById('stop').addEventListener('click', zerar);