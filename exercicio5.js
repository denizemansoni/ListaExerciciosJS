// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")()

let peso = parseFloat(prompt("Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua aultura (m): "));
let IMC = peso /(altura * altura);

if (IMC < 18.5){
    categoria = "Baixo peso";
} else if (IMC >= 18.5 && IMC <= 24.9){
    categoria = "Peso normal";
} else if (IMC >= 25 && IMC <= 29.9){
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}
console.log ("Seu IMC é: ", IMC.toFixed(2));
console.log ("Classificação: ", categoria);