let apple = parseFloat(prompt('Quantas maçãs você deseja comprar?'));

let nonzen = apple * 0.3

let donzen = apple * 0.25

if(apple < 12) {
    alert(`O valor total é de ${nonzen} reais`);
    console.log(nonzen);
}

else if(apple >= 12) {
    alert(`O valor total é de ${donzen} reais`);
    console.log(donzen);
}