// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")()

 let soma = 0;
let quantidade = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número decimal até chegar a 0 para parar: "))
    if (numero === 0){
        break;
    }
    soma += numero; 
    quantidade ++;

    if (quantidade > 0) {
        let media = soma/quantidade;
        console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
    } else {
        console.log("Nenhum número foi inserido para o cálculo da média.")
    }
}