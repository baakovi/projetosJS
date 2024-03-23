let apple = parseInt(prompt('Quantas maçãs você deseja comprar?'));

let price = apple * 0.0

if(apple < 12) {
    price = 0.30;
}

else {
    price = 0.25;
}

let calc = apple * price;

alert(`O valor total é de ${calc} reais.`);
console.log(`O valor total é de ${calc} reais.`);