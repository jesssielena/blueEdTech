// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:

// Quantidade de vida de um monstro (entre 10 e 50);
// Valor do ataque do jogador por turno (entre 5 e 10);
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
// O jogador irá derrotar o monstro em 8 turnos.

const prompt = require("prompt-sync")();
let vidaMonstro;
let ataqueJogador;

do{
    vidaMonstro = +prompt("Digite a quantidade de vida do monstro (entre 10 e 50): ")
    console.log()

    if(vidaMonstro < 10 || vidaMonstro > 50 || isNaN(vidaMonstro)){
        console.log(`Digite novamente!
        `)
    
}   else{

        break;

}

}while(true);


do{
    ataqueJogador = +prompt("Digite o valor de ataque do jogador (entre 5 e 10): ")
    console.log()
    
    if(ataqueJogador < 5 || ataqueJogador > 10 || isNaN(ataqueJogador)){
    console.log(`Digite novamente!
    `)

}   else{

        break;
}

}while(true);


const turnosNecessarios = Math.ceil(vidaMonstro / ataqueJogador);

console.log(`O jogador irá precisar de ${turnosNecessarios} turnos para derrotar o monstro.`)