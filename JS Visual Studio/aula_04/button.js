let atualiza = () => {
    document.querySelector('p').innerText = i;
    i++;
}

let i = 0;

let limpeza = setInterval(atualiza, 1000);

/*let reset = () => {
    clearInterval(limpeza);
    i = 0;
    document.querySelector('p').innerText = i;
}*/

let restart = () => {
    document.querySelector('p').innerText = i = 0;
    setInterval(limpeza, 1000);
}

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(limpeza);
    i = 0;
    document.querySelector('p').innerText = i;
});

document.getElementById('restart').addEventListener('click', restart);