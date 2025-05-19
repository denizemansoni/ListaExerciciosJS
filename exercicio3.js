// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()

let nota = parseFloat(prompt("Digite a nota de 0 a 10: "));

if (nota >= 0 && nota <= 5){
    console.log("Reprovado");
} else if (nota >= 5 && nota <= 6){
    console.log("Recuperação");
} else if (nota >= 7 && nota <=10){
    console.log("Aprovado");
} else{
console.log("Nota inválida. Digite um valor entre 0 a 10.");
}