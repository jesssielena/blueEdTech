// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e 
// informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')();

const idadeDias = +prompt(("Digite sua idade em dias: ")) ;

const idadeEmAnos = idadeDias/365;
const restoDosDias = idadeDias%365;
const idadeEmMeses = restoDosDias/365;
const idadeEmDias = restoDosDias%30;

console.log(`Sua idade é ${idadeEmAnos.toFixed(0)} anos, ${idadeEmMeses.toFixed(0)} meses, ${idadeEmDias} dias `);
