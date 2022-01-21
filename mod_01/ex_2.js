// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
// o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, 
// o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.


const prompt = require('prompt-sync')();

const peca1 = prompt('Digite o nome da peça 1:');
const valorPeca1 = parseFloat(prompt('Digite o valor unitário da peça 1: '));
const qtPeca1 = +prompt('Digite a quantidade de peças: ');


const peca2 = prompt('Digite o nome da peça 1:');
const valorPeca2 = parseFloat(prompt('Digite o valor unitário da peça 1: '));
const qtPeca2 = +prompt('Digite a quantidade de peças: ');


const valorTotal = (valorPeca1*qtPeca1) + (valorPeca2*qtPeca2);

console.log(`O valor a ser pago é R$ ${valorTotal}`);
