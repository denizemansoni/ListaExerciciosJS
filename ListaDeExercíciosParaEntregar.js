//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt= require("prompt-sync")()
function verificarParImpar(numero){
    if(numero % 2 === 0){
        console.log(numero + "é um número par.");
    } else {
        console.log(numero + "é um número impar.");
    }
}

let numeroRecebido = prompt ("Digite um número inteiro: ");
verificarParImpar (parseInt(numeroRecebido));


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.


function classificarIdade(idade){
    if (idade >= 0 && idade <= 12){
        return "Criança";
    } else if(idade >= 13 && idade <= 17){
        return "Adolescente";
    } else if(idade >= 18 && idade <= 59){
        return "Adulto";
    } else if(idade >= 60){
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

let idade = 33;
console.log(`A pessoa com ${idade} anos é classificada como: ${classificarIdade(idade)}`);

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

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

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("Escolha uma opção: ");
console.log("1. pagamento com PIX ");
console.log("2. pagamento com cartão de crédito");
console.log("3. pagamento parcelado");

let opção = parseInt(prompt("Digite a opção desejada: "));

switch (opção){
    case 1: console.log("Você escolheu o pagamento via PIX, favor inserir a chave '0123456' para efetuar o pagamento.");
    break;
    case 2: console.log("Insira ou aproxime seu cartão de crédito.");
    break;
    case 3: console.log("Digite o valor das parcelas: ");
    break;
    default: console.log("Opção inválida. Retorne ao menu principal.");

} 

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

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

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou equilátero.

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

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));
let preço;
if (quantidade < 12){
    preço = 0.30;
} else {
    preço = 0.25;
}

const total = quantidade * preço;
console.log (`O valor total da compra é: R$ ${total.toFixed(2)}`);

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 < valor2){
    console.log (`Os valores em ordem crescente são: ${valor1}, ${valor2}`)
    }else {
        console.log(`Os valores em ordem crescente são:: ${valor2}, ${valor1}`)
    }

//     9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for (let i = 10; i >= 1; i--){
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const numero = parseInt(prompt("Digite um número inteiro: "));
for (let i = 1; i <= 10; i++){
    console.log(`Repetição ${i}: ${numero}`);
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let soma = 0;
for (let i = 1; i <= 5; i++){
let numero = parseFloat(prompt(`Digite o ${i}º número: `));
soma += numero;
}
console.log(`A soma total dos números digitados é: ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const number = parseInt(prompt("Digite um número para ver a tabuanda: "));
console.log(`Tabuada do ${number}: `);
for (let i = 1; i <= 10;  i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

soma = 0;
quantidade = 0;

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

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

numero = parseInt(prompt("Digite um número para calcular o fatorial de um número: "));
let fatorial = 1;
for (let i = numero; i >= 1; i--){
    fatorial *= i;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let Fibonacci = [0, 1];
for (let i = 2; i < 10; i++){
    Fibonacci[i] = Fibonacci[ i - 1] + Fibonacci[i - 2];
    
}
console.log("os primeiros 10 números da sequência: ");
console.log(Fibonacci.join(", "))