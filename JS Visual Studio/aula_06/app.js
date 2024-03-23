const tela = document.getElementById('tela');
const contexto = tela.getContext('2d'); 

// BOILER PLATE

// quadrado 1

/* const posX0 = 0;
const posY0 = 0;
const largura0 = 100;
const altura0 = 100;
const cor = 'red';

function desenhaQuadrado(posX, posY, largura, altura, cor) {
    contexto.fillStyle = cor;
    contexto.fillRect(posX, posY, largura, altura);
}

desenhaQuadrado(150, 150, 200, 200, 'crimson');
desenhaQuadrado(25, 25, 150, 150, 'khaki');
desenhaQuadrado(320, 320, 150, 150, 'teal'); */

/*let quadrado = () => {
    const posX = 0;
    const posY = 0;
    const largura = 100;
    const altura = 100;

    contexto.fillStyle = 'olive';
    contexto.fillRect(posX, posY, largura, altura);
} */

// quadrado 2
/*const posX = 150;
const posY = 150;
const largura = 200;
const altura = 200;

contexto.fillStyle = 'crimson';
contexto.fillRect(posX, posY, largura, altura);

// quadrado 2
const posX1 = 25;
const posY1 = 25;
const largura1 = 150;
const altura1 = 150;

contexto.fillStyle = 'khaki';
contexto.fillRect(posX1, posY1, largura1, altura1);

// quadrado 3
const posX2 = 320;
const posY2 = 320;
const largura2 = 150;
const altura2 = 150;

contexto.fillStyle = 'teal';
contexto.fillRect(posX2, posY2, largura2, altura2);*/


/*let jogador1X = 1;
let jogador1Y = 1; */

let placar = 0;

const jogador = {
    x : 1,
    y : 1
}

const frutas = (x, y) => {
    return {
        x: x,
        y: y,
    };
}

function desenhaFruta(fruta) {
    contexto.fillStyle = 'red';
    contexto.fillRect(fruta.x, fruta.y, 1, 1);
}

function destroyFruta(fruta) {
    //contexto.clearRect(fruta.x, fruta.y, 1, 1);
    //this.x = undefined;
    //this.y = undefined;
    delete fruta.x;
    delete fruta.y;
}

/*const fruta1 = frutas(6,8);
const fruta2 = frutas(5,3);
const fruta3 = frutas(4,7);
const fruta4 = frutas(2,5);
const fruta5 = frutas(5,5);*/

// CRIAR UM VETOR VAZIO
const cestaDeFrutas = [];
for(let i = 0; i < 10; i++) {
    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
        
    cestaDeFrutas.push(frutas(x,y));
}

console.log(cestaDeFrutas);

/*desenhaFruta : function() {
    contexto.fillStyle = 'red';
    contexto.fillRect(x, y, 1, 1);
},*/

/*if(jogador.x == x && jogador.y == y) {
    //frutas.pop();
    contexto.clearRect(x, y, 1, 1);
    //this.x = undefined;
    //this.y = undefined;
    delete this.x;
    delete this.y;
}*/

/*const fruta1X = 3;
const fruta1Y = 1; */

function renderizaTela() {
    contexto.clearRect(0, 0, 20, 20);

    for(f of cestaDeFrutas) {
        desenhaFruta(f);
        
        if(jogador.x === f.x && jogador.y === f.y) {
            destroyFruta(f);
            placar++;
            document.querySelector('h1').textContent = placar;
        }
    }
    
    /*if(jogador.x === fruta1.x && jogador.y === fruta1.y) {
        destroyFruta(fruta1);
    }

    if(jogador.x === fruta3.x && jogador.y === fruta3.y) {
        destroyFruta(fruta3);
    }

    if(jogador.x === fruta4.x && jogador.y === fruta4.y) {
        destroyFruta(fruta4);
    }
    
    if(jogador.x === fruta5.x && jogador.y === fruta5.y) {
        destroyFruta(fruta5);
    }*/

    //console.log(`jogador.x: ${jogador.x}, fruta2.x: ${jogador.x}`);

    contexto.fillStyle = 'black';
    contexto.fillRect(jogador.x, jogador.y, 1, 1);
    
    requestAnimationFrame(renderizaTela);
}

renderizaTela();

// addEventListener receebe um evento e uma CallBack
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

/*function someFruta() {

    if(jogador.x === fruta.x && jogador.y === fruta.y) {
        fruta.x = fruta.y = 0;
    }
}*/