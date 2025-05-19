// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

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