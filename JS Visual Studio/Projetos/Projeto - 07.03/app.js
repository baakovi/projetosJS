const tela = document.getElementById('tela');
const contexto = tela.getContext('2d'); 

let placar = 100;

const jogador = {
    x : 1,
    y : 1
}

const alien = {x: 10, y: 3}

const frutas = (x, y) => {
    return {
        x: x,
        y: y,
    };
}

function desenhaFruta(fruta) {
    contexto.fillStyle = 'purple';
    contexto.fillRect(fruta.x, fruta.y, 1, 1);
}

function destroyFruta(fruta) {
    delete fruta.x;
    delete fruta.y;
}

/*let n = 0;

let contar = () => {
    document.querySelector('h2').innerText = n;
    n++;
}

let contagem = setInterval(contar, 1000);

let contaAe = () => {
    clearInterval(contagem);
    document.querySelector('h2').innerText = 0;
}*/

function gameOver() {
    if(placar === 0) {
        document.getElementById('jogador').textContent = 'Você perdeu :(';
        placar = 0;
        n = 0; 
        setTimeout(() => {
            document.location.reload();
        }, 2000);
    }
}

function movimenta() {
    var reverte = true;
    setInterval(() => {
        
        if(reverte && alien.x > 0) {
            alien.x = alien.x - 1 * 0.05;
            //reverte = false
        }
        else if(reverte === false && alien.x + 1 < tela.width) {
            alien.x = alien.x + 1 * 0.05;
            //reverte = true;
        }
        reverte = false
        /*if(reverte === true && alien.x + 1 < tela.width) {
            alien.x = alien.x + 1 * 0.05;
        }*/
    }, 1000);
}

let numerodeUvas = 10;

const uvas = [];
for(let i = 0; i < numerodeUvas; i++) {
    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
        
    uvas.push(frutas(x,y));
}

console.log(uvas);

function renderizaTela() {
    contexto.clearRect(0, 0, 20, 20);

    for(f of uvas) {
        desenhaFruta(f);

        if(jogador.x === f.x && jogador.y === f.y) {
            destroyFruta(f);
            placar -= 10;
            numerodeUvas--;
            document.getElementById('jogador').textContent = placar;
        }
    }   

    contexto.fillStyle = 'teal';
    contexto.fillRect(jogador.x, jogador.y, 1, 1);
    
    contexto.fillStyle = 'black';
    contexto.fillRect(alien.x, alien.y, 1, 1);

    //contaAe();
    //contar();
    movimenta(alien);
    gameOver();
    
    requestAnimationFrame(renderizaTela);
}

renderizaTela();

document.addEventListener('keydown', (evento) => {

    if(evento.key === 'ArrowRight' && jogador.x + 1 < tela.width) {
        jogador.x++;
    }

    if(evento.key === 'ArrowLeft' && jogador.x > 0) {
        jogador.x--;
    }

    if(evento.key === 'ArrowDown' && jogador.y + 1 < tela.height) {
        jogador.y++;
    }

    if(evento.key === 'ArrowUp' && jogador.y > 0) {
        jogador.y--;
    }

    console.log(evento.key);
});