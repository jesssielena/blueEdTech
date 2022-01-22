// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias.
//  Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu.
//  Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')();


const idadeAnos = +prompt("Digite sua idade em anos: ");
const idadeMeses = +prompt("Digite sua idade em meses: ");
const idadeDias = +prompt("Digite sua idade em dias: ");

const idadeEmDias= (idadeAnos*365);
const idadeEmMeses=(idadeMeses*30);

const totalDedias= idadeEmDias + idadeEmMeses + idadeDias;


console.log(`Sua idade em dias é ${totalDedias}`);