// src/02-condicionais.js

console.log("=== ESTRUTURAS CONDICIONAIS ===");

// IF simples
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// IF com múltiplas condições
let nota = 8.5;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Bom!");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Precisa melhorar");
}

// Operadores lógicos
let temCarteira = true;
let temCarro = false;

if (temCarteira && temCarro) {
    console.log("Pode dirigir!");
} else if (temCarteira || temCarro) {
    console.log("Falta algo para dirigir...");
} else {
    console.log("Não pode dirigir");
}

// Switch
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    default:
        nomeDia = "Final de semana";
}

console.log("Hoje é:", nomeDia);