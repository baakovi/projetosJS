// ARQUIVOS SEM USO PARA ESTUDO

/*console.log(1);

// CALLBACK
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);*/

// BUTTON
/*document.querySelector('button').addEventListener('click', () => {
    console.log('clicou!!')
}); */

let atualiza = () => {
    document.querySelector('p').innerText = i;
    i++;
}

let i = 0;
let limpada = setInterval(atualiza, 1000);

/*let i = 0;
let limpada = setInterval(() => {
    document.querySelector('p').innerText = i;
    i++;
}, 0);*/

let limpaae = () => {
    clearInterval(limpada);
    i = 0;
    document.querySelector('p').innerText = i;
}

let restart = () => {
    i = 0;
    document.querySelector('p').innerText = i;
}

document.getElementById('stop').addEventListener('click', limpaae);
document.getElementById('restart').addEventListener('click', restart);

/*let resetar = () => {
    reset()
}

document.getElementById('restart').addEventListener(); */

/*document.querySelector('button').addEventListener('click', () => {
    clearInterval(limpada);
});*/

//document.getElementById('stop')