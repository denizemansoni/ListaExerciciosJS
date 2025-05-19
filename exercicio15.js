// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")()

let Fibonacci = [0, 1];
for (let i = 2; i < 10; i++){
    Fibonacci[i] = Fibonacci[ i - 1] + Fibonacci[i - 2];
    
}
console.log("os primeiros 10 números da sequência: ");
console.log(Fibonacci.join(", "))