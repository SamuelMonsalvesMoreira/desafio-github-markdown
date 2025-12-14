// src/01-variaveis.js

console.log("=== VARIÁVEIS E OPERAÇÕES BÁSICAS ===");

// Declaração de variáveis
let nome = "João";
let idade = 25;
let altura = 1.75;
let estudante = true;

// Exibindo informações
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura + "m");
console.log("É estudante:", estudante);

// Operações matemáticas
let a = 10;
let b = 3;

console.log("\n--- Operações Matemáticas ---");
console.log(a + " + " + b + " =", a + b);
console.log(a + " - " + b + " =", a - b);
console.log(a + " * " + b + " =", a * b);
console.log(a + " / " + b + " =", a / b);
console.log(a + " % " + b + " =", a % b);

// Concatenação
let saudacao = "Olá, " + nome + "! Você tem " + idade + " anos.";
console.log("\nSaudação:", saudacao);

// Template literals (forma moderna)
let saudacaoModerna = `Olá, ${nome}! Você tem ${idade} anos e ${altura}m de altura.`;
console.log("Saudação moderna:", saudacaoModerna);