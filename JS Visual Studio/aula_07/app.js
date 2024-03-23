// Objetos

/*const usuario = {
    nome: 'Anko',
    idade: 21,
    endereco: {
        rua: 'Liberdade',
        numero: 89,
    }
}

//alert(usuario['endereco']['maisUma']['chave2'])

// Testa se a chave 'nome' existe no objeto usuário.
document.querySelector('h1').innerText = ('nome' in usuario)

// Retorna um array(vetor) com chave:valor de um objeto, que no caso do objeto é o usuário
document.querySelector('h1').innerText = JSON.stringify(Object.entries(usuario));

document.querySelector('h1').innerText = JSON.stringify(Object.values(usuario));

// document.querySelector('h1').innerText = usuario.nome;


// Desestruturação
const {nome, idade} = usuario;

document.querySelector('h1').innerText = JSON.stringify({endereco, idade}) */


// Operador REST
const array = [10,20,30,40,50,60,70,80,90,100];
const [primeiro, , , segundo, ...rest] = array;
//document.querySelector('h1').innerText = [primeiro, segundo, rest]


// Métodos de ARRAY

// OF : ->  a variável do for é o elemento do vetor
for(const i of array) {
    // document.querySelector('h1').innerText += i + ', ';
}

// IN : ->  a variável do for é o ÍNDICE(endereço de cada posição do vetor) do vetor
for(const i in array) {
    // document.querySelector('h1').innerText += i + ', ';
}


// MAP -> de mapear
const nomes = ['Mario', 'Mario2', 'Mario3', 'Mario4', 'Mario5'];

function dizOla(nome) {
    document.querySelector('h1').innerText += `Olá ${nome}, bom dia \n`;
}

nomes.map((item) => {
    dizOla(item);
});

/*for(let i = 0; i < nomes.length; i++) {
    dizOlaMario(nomes[i]);
}*/