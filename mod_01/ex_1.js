// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
// A seguir calcule e informe a média ponderada do aluno, 
// sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.


const prompt = require('prompt-sync')();

const nota1 = +prompt("Digite a nota 1: ");
const nota2 = +prompt("Digite a nota2: ");

const mediaponderada = ((nota1 * 4) + (nota2 * 6)) /10;

console.log(`Sua média ${mediaponderada}`);


