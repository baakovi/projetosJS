const tela = document.getElementById('tela');
const contexto = tela.getContext('2d'); 

let placar = 0;

let score = 0;

const jogador = {
    x : 1,
    y : 1
}

const player = {
    x : 18,
    y : 1
}

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

function gameOver() {
    if(numerodeUvas === 0 && placar > score) {
        document.getElementById('jogador').textContent = 'Jogador 1 ganhou!!';
        document.getElementById('player').textContent = '';
        placar = 0;
        score = 0;
        setTimeout(() => {
            document.location.reload();    
        }, 2000);
    }

    else if(numerodeUvas === 0 && score > placar){
        document.getElementById('jogador').textContent = '';
        document.getElementById('player').textContent = 'Jogador 2 ganhou!!';
        placar = 0;
        score = 0;
        setTimeout(() => {
            document.location.reload();    
        }, 2000);
    }
}

let numerodeUvas = 11;

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
            placar++;
            numerodeUvas--;
            document.getElementById('jogador').textContent = placar;
        }

        if(player.x === f.x && player.y === f.y) {
            destroyFruta(f);
            score++;
            numerodeUvas--;
            document.getElementById('player').textContent = score;
        }
    }

    contexto.fillStyle = 'teal';
    contexto.fillRect(jogador.x, jogador.y, 1, 1);
    
    contexto.fillStyle = 'gold';
    contexto.fillRect(player.x, player.y, 1, 1);

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

document.addEventListener('keydown', (evento) => {

    if(evento.key === 'd' && player.x + 1 < tela.width) {
        player.x++;
    }
   
    if(evento.key === 'a' && player.x > 0) {
        player.x--;
    }
   
    if(evento.key === 's' && player.y + 1 < tela.height) {
        player.y++;
    }
   
    if(evento.key === 'w' && player.y > 0) {
        player.y--;
    }

    console.log(evento.key);
});