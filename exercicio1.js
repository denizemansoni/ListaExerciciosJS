//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt= require("prompt-sync")()
function verificarParImpar(numero){
    if(numero % 2 === 0){
        console.log(numero + " é um número par.");
    } else {
        console.log(numero + " é um número impar.");
    }
}

let numeroRecebido = prompt ("Digite um número inteiro: ");
verificarParImpar (parseInt(numeroRecebido));