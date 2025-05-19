// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require("prompt-sync")()

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