// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou equilátero.

const prompt = require("prompt-sync")()

let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C){
        console.log("Triângulo equilátero: todos os lados são iguais.");

        } else if(A === B || A === C || B === C ){
            console.log("Triângulo isósceles: Dois lados são iguais. ");

            } else {
                console.log("Triângulo escaleno: nenhum lado é igual. ");
            }
        } else {
            console.log("Nenhum valor inserido forma um triângulo. ");
        }